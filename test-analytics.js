import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "dummy",
  authDomain: "irepair-ingolstadt.firebaseapp.com",
  projectId: "irepair-ingolstadt",
  storageBucket: "irepair-ingolstadt.firebasestorage.app",
  messagingSenderId: "148386348421",
  appId: "1:148386348421:web:dd61c9ab2281e7d23d8382"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function test() {
  const q = query(collection(db, 'phones'), where('status', '==', 'sold'));
  const snap = await getDocs(q);
  const soldPhones = snap.docs.map(d => ({id: d.id, ...d.data()}));
  
  console.log(`Found ${soldPhones.length} sold phones`);
  
  let totalSalesValue = 0;
  const brandCounts = {};
  const monthlyDataMap = {};
  const now = new Date();

  soldPhones.forEach(p => {
      totalSalesValue += p.price || 0;
      
      brandCounts[p.brand] = (brandCounts[p.brand] || 0) + 1;

      let saleDate = null;
      if (p.soldAt && p.soldAt.toDate) saleDate = p.soldAt.toDate();
      else if (p.updatedAt && p.updatedAt.toDate) saleDate = p.updatedAt.toDate();

      if (saleDate) {
        const monthKey = `${saleDate.getFullYear()}-${String(saleDate.getMonth() + 1).padStart(2, '0')}`;
        monthlyDataMap[monthKey] = (monthlyDataMap[monthKey] || 0) + (p.price || 0);
      }
  });

  const brandChartData = Object.keys(brandCounts).map(brand => ({ brand, count: brandCounts[brand] })).sort((a,b) => b.count - a.count);
  const monthlyChartData = Object.keys(monthlyDataMap).sort().map(month => ({ month, revenue: monthlyDataMap[month] }));

  console.log("brandChartData:", JSON.stringify(brandChartData, null, 2));
  console.log("monthlyChartData:", JSON.stringify(monthlyChartData, null, 2));
}

test().catch(console.error);
