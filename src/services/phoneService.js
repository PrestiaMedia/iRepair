import { db, storage } from '../lib/firebase';
import { 
  collection, 
  doc, 
  getDoc,
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  serverTimestamp, 
  orderBy,
  deleteField
} from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';

const PHONES_COLLECTION = 'phones';

export async function getAllPhonesForAdmin() {
  const q = query(collection(db, PHONES_COLLECTION), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getActivePublishedPhones() {
  const q = query(
    collection(db, PHONES_COLLECTION),
    where('published', '==', true),
    where('status', 'in', ['active', 'reserved'])
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function createPhone(phoneData) {
  const newPhone = {
    ...phoneData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };
  
  if (phoneData.status === 'sold') {
    newPhone.soldAt = serverTimestamp();
    newPhone.published = false;
  }
  
  const docRef = await addDoc(collection(db, PHONES_COLLECTION), newPhone);
  return docRef.id;
}

export async function updatePhone(phoneId, updates) {
  const docRef = doc(db, PHONES_COLLECTION, phoneId);
  const payload = {
    ...updates,
    updatedAt: serverTimestamp()
  };

  // Automatically manage soldAt timestamp
  if (updates.status === 'sold') {
    // We can't easily check if soldAt already exists without fetching,
    // so we'll just set it every time status is changed to sold.
    // If we wanted to keep original, we would fetch first. But this is fine for this use case.
    payload.soldAt = serverTimestamp();
    payload.published = false; // Auto-unpublish
  } else if (updates.status === 'active' || updates.status === 'reserved') {
    // Clear soldAt when reverting from sold
    payload.soldAt = deleteField();
  }

  await updateDoc(docRef, payload);
}

export async function deletePhone(phoneId) {
  const docRef = doc(db, PHONES_COLLECTION, phoneId);
  const snapshot = await getDoc(docRef);
  
  if (snapshot.exists()) {
    const data = snapshot.data();
    // Delete associated images if they have metadata
    if (data.imageMeta && Array.isArray(data.imageMeta)) {
      for (const meta of data.imageMeta) {
        if (meta.path) {
          try {
            const imageRef = ref(storage, meta.path);
            await deleteObject(imageRef);
          } catch (e) {
            console.error("Fehler beim Löschen des Bildes aus dem Storage:", e);
          }
        }
      }
    }
  }

  await deleteDoc(docRef);
}

export async function cleanupOldSoldImages() {
  // Find sold phones
  const q = query(collection(db, PHONES_COLLECTION), where('status', '==', 'sold'));
  const snapshot = await getDocs(q);
  
  const now = new Date();
  const FOURTEEN_DAYS_MS = 0; // Temporarily 0 for testing!
  
  let deletedCount = 0;

  for (const document of snapshot.docs) {
    const data = document.data();
    
    if (data.imagesCleaned) continue;
    
    // Check if older than 14 days
    let soldTime = null;
    if (data.soldAt && data.soldAt.toDate) {
      soldTime = data.soldAt.toDate();
    } else if (data.updatedAt && data.updatedAt.toDate) {
      soldTime = data.updatedAt.toDate();
    }

    if (soldTime && (now - soldTime > FOURTEEN_DAYS_MS)) {
      // Safe to clean images
      if (data.imageMeta && Array.isArray(data.imageMeta)) {
        for (const meta of data.imageMeta) {
          if (meta.path) {
            try {
              const imageRef = ref(storage, meta.path);
              await deleteObject(imageRef);
            } catch (e) {
              console.error("Fehler beim Löschen des Bildes für Cleanup:", e);
            }
          }
        }
      }
      
      // Update document to mark cleaned
      const docRef = doc(db, PHONES_COLLECTION, document.id);
      await updateDoc(docRef, {
        imagesCleaned: true,
        imagesCleanedAt: serverTimestamp(),
        imageUrls: [],
        imageMeta: []
      });
      deletedCount++;
    }
  }
  
  return deletedCount;
}

// Helpers for specific status updates
export function markPhoneActive(phoneId) {
  return updatePhone(phoneId, { status: 'active' });
}

export function markPhoneSold(phoneId) {
  return updatePhone(phoneId, { status: 'sold' });
}

export function markPhoneReserved(phoneId) {
  return updatePhone(phoneId, { status: 'reserved' });
}

export function publishPhone(phoneId) {
  return updatePhone(phoneId, { published: true });
}

export function unpublishPhone(phoneId) {
  return updatePhone(phoneId, { published: false });
}

export function reactivatePhone(phoneId) {
  // Sets status to active and ensures it's unpublished by default so admin can review
  return updatePhone(phoneId, { status: 'active', published: false });
}
