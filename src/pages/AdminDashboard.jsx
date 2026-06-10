import { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { getAllPhonesForAdmin, deletePhone, markPhoneActive, markPhoneSold, markPhoneReserved, publishPhone, unpublishPhone, cleanupOldSoldImages, reactivatePhone } from '../services/phoneService';
import AdminPhoneForm from '../components/AdminPhoneForm';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from 'recharts';
import { Package, CheckCircle, Clock, Trash2, Edit, AlertTriangle, RefreshCcw, Smartphone, Euro, TrendingUp, BarChart2, CornerUpLeft } from 'lucide-react';

// Robust Responsive Wrapper for Recharts to avoid 0x0 hidden-tab bugs
const ChartWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let timer;
    const observer = new ResizeObserver((entries) => {
      if (entries[0] && entries[0].contentRect.width > 0) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          setWidth(entries[0].contentRect.width);
        }, 50); // slight debounce for safety
      }
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
      // Fallback manual read
      if (containerRef.current.offsetWidth > 0) {
        setWidth(containerRef.current.offsetWidth);
      }
    }
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: '280px' }}>
      {width > 100 && children(width)}
    </div>
  );
};

const FIVE_GB_BYTES = 5 * 1024 * 1024 * 1024;

export default function AdminDashboard() {
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [phones, setPhones] = useState([]);
  const [loadingPhones, setLoadingPhones] = useState(true);
  
  const [editingPhone, setEditingPhone] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState('inventory'); // 'inventory' | 'sales'
  const [cleaning, setCleaning] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/admin/login');
      } else {
        setLoadingAuth(false);
        loadPhones();
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const loadPhones = async () => {
    setLoadingPhones(true);
    try {
      const data = await getAllPhonesForAdmin();
      setPhones(data);
    } catch (err) {
      console.error("Error loading phones", err);
    } finally {
      setLoadingPhones(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Möchten Sie dieses Gerät wirklich endgültig löschen? (Dazugehörige Bilder werden ebenfalls gelöscht)')) {
      await deletePhone(id);
      loadPhones();
    }
  };

  const handleReactivate = async (id) => {
    if (window.confirm('Dieses Gerät wieder in das Inventar aufnehmen? Es wird zunächst als "Entwurf" markiert.')) {
      await reactivatePhone(id);
      loadPhones();
    }
  };

  const handleDeleteSold = async (id) => {
    if (window.confirm('Möchten Sie diesen Eintrag endgültig aus dem Verkaufsverlauf löschen?')) {
      await deletePhone(id);
      loadPhones();
    }
  };

  const handleCleanup = async () => {
    if (window.confirm('Dadurch werden nur die Bilder gelöscht, die Verkaufsdaten bleiben erhalten. Fortfahren?')) {
      setCleaning(true);
      try {
        const count = await cleanupOldSoldImages();
        alert(`Erfolg: Bilder von ${count} verkauften Geräten wurden gelöscht.`);
        loadPhones();
      } catch (err) {
        alert('Fehler beim Löschen der alten Bilder.');
        console.error(err);
      } finally {
        setCleaning(false);
      }
    }
  };

  // --- DERIVED DATA ---
  const inventoryPhones = phones.filter(p => p.status !== 'sold');
  const soldPhones = phones.filter(p => p.status === 'sold');

  const totalPhones = inventoryPhones.length;
  const availablePhones = inventoryPhones.filter(p => p.status === 'active').length;
  const reservedPhones = inventoryPhones.filter(p => p.status === 'reserved').length;

  // Storage calculation
  let totalImagesCount = 0;
  let totalSizeBytes = 0;
  
  phones.forEach(phone => {
    if (phone.imageMeta && Array.isArray(phone.imageMeta)) {
      totalImagesCount += phone.imageMeta.length;
      phone.imageMeta.forEach(meta => {
        if (meta.sizeBytes) totalSizeBytes += meta.sizeBytes;
      });
    }
  });

  const usedMB = (totalSizeBytes / (1024 * 1024)).toFixed(2);
  const remainingMB = ((FIVE_GB_BYTES - totalSizeBytes) / (1024 * 1024)).toFixed(2);
  const percentUsed = Math.min(100, (totalSizeBytes / FIVE_GB_BYTES) * 100).toFixed(2);

  // --- ANALYTICS ---
  const analytics = useMemo(() => {
    let totalSalesValue = 0;
    let thisMonthValue = 0;
    let thisMonthCount = 0;
    const now = new Date();
    const brandCounts = {};
    const monthlyDataMap = {}; // Format: "YYYY-MM" -> revenue

    soldPhones.forEach(p => {
      const priceVal = Number(p.price) || 0;
      totalSalesValue += priceVal;
      
      // Brand Breakdown
      const brand = p.brand || 'Unbekannt';
      brandCounts[brand] = (brandCounts[brand] || 0) + 1;

      // Date Parsing with robust fallback
      let saleDate = null;
      if (p.soldAt && typeof p.soldAt.toDate === 'function') saleDate = p.soldAt.toDate();
      else if (p.updatedAt && typeof p.updatedAt.toDate === 'function') saleDate = p.updatedAt.toDate();
      else if (p.createdAt && typeof p.createdAt.toDate === 'function') saleDate = p.createdAt.toDate();
      else saleDate = new Date(); // Ultimate fallback so chart is never empty

      if (saleDate) {
        if (saleDate.getMonth() === now.getMonth() && saleDate.getFullYear() === now.getFullYear()) {
          thisMonthValue += priceVal;
          thisMonthCount += 1;
        }

        const monthKey = `${saleDate.getFullYear()}-${String(saleDate.getMonth() + 1).padStart(2, '0')}`;
        monthlyDataMap[monthKey] = (monthlyDataMap[monthKey] || 0) + priceVal;
      }
    });

    const avgPrice = soldPhones.length > 0 ? (totalSalesValue / soldPhones.length) : 0;
    
    // Format charts data
    const brandChartData = Object.keys(brandCounts).map(brand => ({ brand, count: brandCounts[brand] })).sort((a,b) => b.count - a.count);
    const monthlyChartData = Object.keys(monthlyDataMap).sort().map(month => ({ month, revenue: monthlyDataMap[month] }));

    return { totalSalesValue, avgPrice, thisMonthValue, thisMonthCount, brandChartData, monthlyChartData };
  }, [soldPhones]);

  const formatEUR = (val) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val);

  useEffect(() => {
    console.log("Analytics Data:", analytics);
  }, [analytics]);

  // Force chart to re-render when switching to sales tab
  useEffect(() => {
    if (activeTab === 'sales') {
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);
  if (loadingAuth) return <div style={{ padding: '50px', textAlign: 'center', fontFamily: "'Inter', sans-serif" }}>Lade Dashboard...</div>;

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '24px 0', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '16px 24px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
          <div>
            <h2 style={{ margin: 0, color: '#1e293b', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em' }}>Admin Dashboard</h2>
            <p style={{ margin: '2px 0 0 0', color: '#64748b', fontSize: '0.9rem' }}>iRepair Geräteverwaltung</p>
          </div>
          <button onClick={handleLogout} style={{ padding: '8px 16px', background: '#fff', color: '#1e293b', border: '1px solid #cbd5e1', borderRadius: '6px', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.15s' }}
            onMouseOver={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#94a3b8'; }}
            onMouseOut={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#cbd5e1'; }}
          >
            Abmelden
          </button>
        </div>

        {!showForm ? (
          <>
            {/* TABS */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '24px', borderBottom: '1px solid #cbd5e1' }}>
              <button onClick={() => setActiveTab('inventory')} style={tabStyle(activeTab === 'inventory')}>
                <Package size={16} /> Aktuelles Inventar
              </button>
              <button onClick={() => setActiveTab('sales')} style={tabStyle(activeTab === 'sales')}>
                <BarChart2 size={16} /> Bisherige Verkäufe
              </button>
            </div>

            {/* TAB: INVENTORY */}
            {activeTab === 'inventory' && (
              <>
                {/* STATS OVERVIEW */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                  <StatCard title="Gesamt Geräte" value={totalPhones} icon={<Smartphone size={20} color="#0f172a"/>} color="#0f172a" />
                  <StatCard title="Verfügbar" value={availablePhones} icon={<CheckCircle size={20} color="#16a34a"/>} color="#16a34a" />
                  <StatCard title="Reserviert" value={reservedPhones} icon={<Clock size={20} color="#ca8a04"/>} color="#ca8a04" />
                </div>

                {/* STORAGE WIDGET */}
                <div style={{ background: '#fff', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
                      <div>
                        <h3 style={{ margin: '0 0 2px 0', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '1rem', fontWeight: 600 }}>Bildspeicher</h3>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Geschätzt aus Gerätebildern</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b' }}>{usedMB} MB</span>
                        <span style={{ color: '#64748b', fontSize: '0.85rem' }}> / 5000 MB</span>
                      </div>
                    </div>
                    
                    <div style={{ width: '100%', height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${percentUsed}%`, height: '100%', background: percentUsed > 90 ? '#ef4444' : '#1d3a8f', transition: 'width 0.5s' }}></div>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.8rem', color: '#64748b' }}>
                      <span>{totalImagesCount} Bilder gespeichert</span>
                      <span>Noch {remainingMB} MB frei</span>
                    </div>
                  </div>
                </div>

                {/* DEVICE LISTING */}
                <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #e2e8f0' }}>
                    <h3 style={{ margin: 0, color: '#1e293b', fontSize: '1.1rem', fontWeight: 600 }}>Inventar-Liste</h3>
                    <button onClick={() => { setEditingPhone(null); setShowForm(true); }} style={{ padding: '8px 16px', background: '#1d3a8f', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'background 0.15s' }}
                      onMouseOver={e => e.currentTarget.style.background = '#152b6b'}
                      onMouseOut={e => e.currentTarget.style.background = '#1d3a8f'}>
                      + Neues Gerät
                    </button>
                  </div>

                  {loadingPhones ? (
                    <p style={{ color: '#64748b', textAlign: 'center', padding: '40px' }}>Lade Daten...</p>
                  ) : inventoryPhones.length === 0 ? (
                    <div style={{ padding: '40px', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>Keine aktiven Geräte vorhanden.</div>
                  ) : (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px', fontSize: '0.9rem' }}>
                        <thead>
                          <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.02em', fontWeight: 600, background: '#f8fafc' }}>
                            <th style={{ padding: '12px 20px' }}>Bild</th>
                            <th style={{ padding: '12px 20px' }}>Gerät</th>
                            <th style={{ padding: '12px 20px' }}>Preis</th>
                            <th style={{ padding: '12px 20px' }}>Status</th>
                            <th style={{ padding: '12px 20px' }}>Sichtbar</th>
                            <th style={{ padding: '12px 20px', textAlign: 'right' }}>Aktionen</th>
                          </tr>
                        </thead>
                        <tbody>
                          {inventoryPhones.map(p => (
                            <tr key={p.id} style={{ borderBottom: '1px solid #f1f5f9' }} onMouseOver={e => e.currentTarget.style.background = '#f8fafc'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                              <td style={{ padding: '12px 20px' }}>
                                {p.imageUrls && p.imageUrls[0] ? (
                                  <img src={p.imageUrls[0]} alt="thumb" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #e2e8f0' }} />
                                ) : (
                                  <div style={{ width: '40px', height: '40px', background: '#f1f5f9', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.7rem' }}>N/A</div>
                                )}
                              </td>
                              <td style={{ padding: '12px 20px' }}>
                                <div style={{ fontWeight: 600, color: '#0f172a' }}>{p.brand} {p.model}</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>{p.storage} | {p.condition}</div>
                              </td>
                              <td style={{ padding: '12px 20px', fontWeight: 600, color: '#0f172a' }}>{formatEUR(p.price)}</td>
                              <td style={{ padding: '12px 20px' }}>
                                <select 
                                  value={p.status} 
                                  onChange={async (e) => {
                                    const s = e.target.value;
                                    if (s === 'active') await markPhoneActive(p.id);
                                    if (s === 'reserved') await markPhoneReserved(p.id);
                                    if (s === 'sold') await markPhoneSold(p.id);
                                    loadPhones();
                                  }}
                                  style={{ 
                                    padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', outline: 'none',
                                    background: '#fff',
                                    color: '#0f172a',
                                    fontFamily: "'Inter', sans-serif"
                                  }}
                                >
                                  <option value="active">Verfügbar</option>
                                  <option value="reserved">Reserviert</option>
                                  <option value="sold">Verkauft</option>
                                </select>
                              </td>
                              <td style={{ padding: '12px 20px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                  <input 
                                    type="checkbox" 
                                    checked={p.published} 
                                    onChange={async (e) => {
                                      if (e.target.checked) await publishPhone(p.id);
                                      else await unpublishPhone(p.id);
                                      loadPhones();
                                    }}
                                    style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                                  />
                                </label>
                              </td>
                              <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                                <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                                  <button onClick={() => { setEditingPhone(p); setShowForm(true); }} style={{ background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', padding: '6px', borderRadius: '4px', cursor: 'pointer' }} title="Bearbeiten" onMouseOver={e => e.currentTarget.style.background = '#e2e8f0'} onMouseOut={e => e.currentTarget.style.background = '#f8fafc'}>
                                    <Edit size={16} />
                                  </button>
                                  <button onClick={() => handleDelete(p.id)} style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', padding: '6px', borderRadius: '4px', cursor: 'pointer' }} title="Löschen" onMouseOver={e => e.currentTarget.style.background = '#fca5a5'} onMouseOut={e => e.currentTarget.style.background = '#fef2f2'}>
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* TAB: SALES ARCHIVE & ANALYTICS */}
            {activeTab === 'sales' && (
              <>
                {/* ANALYTICS CARDS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                  <StatCard title="Verkaufte Geräte" value={soldPhones.length} icon={<Package size={20} color="#0f172a"/>} color="#0f172a" />
                  <StatCard title="Umsatz (Gesamt)" value={formatEUR(analytics.totalSalesValue)} icon={<Euro size={20} color="#0d9488"/>} color="#0d9488" />
                  <StatCard title="Ø Verkaufspreis" value={formatEUR(analytics.avgPrice)} icon={<TrendingUp size={20} color="#ea580c"/>} color="#ea580c" />
                  <StatCard title="Umsatz (Dieser Monat)" value={formatEUR(analytics.thisMonthValue)} subtitle={`${analytics.thisMonthCount} Geräte`} icon={<Euro size={20} color="#16a34a"/>} color="#16a34a" />
                </div>

                {/* CHARTS */}
                {soldPhones.length > 0 ? (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px', marginBottom: '24px' }} key={`charts-${activeTab}`}>
                    
                    {/* Revenue Line Chart */}
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', minWidth: 0 }}>
                      <h4 style={{ margin: '0 0 16px 0', color: '#1e293b', fontSize: '1rem', fontWeight: 600 }}>Monatlicher Umsatz</h4>
                      <div style={{ height: '280px', width: '100%', minWidth: '300px' }}>
                        <ChartWrapper>
                          {(width) => (
                            <BarChart width={width} height={280} data={analytics.monthlyChartData} margin={{ left: 0, right: 20 }}>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontFamily: "'Inter', sans-serif"}} dy={10} />
                              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontFamily: "'Inter', sans-serif"}} tickFormatter={(val) => `${val}€`} dx={-10} />
                              <Tooltip formatter={(value) => [`${value} €`, 'Umsatz']} cursor={{ fill: '#f8fafc' }} contentStyle={{borderRadius: '4px', border: '1px solid #cbd5e1', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem'}} />
                              <Bar dataKey="revenue" fill="#1d3a8f" radius={[2, 2, 0, 0]} maxBarSize={40} />
                            </BarChart>
                          )}
                        </ChartWrapper>
                      </div>
                    </div>

                    {/* Brand Bar Chart */}
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', minWidth: 0 }}>
                      <h4 style={{ margin: '0 0 16px 0', color: '#1e293b', fontSize: '1rem', fontWeight: 600 }}>Verkäufe nach Marke</h4>
                      <div style={{ height: '280px', width: '100%', minWidth: '300px' }}>
                        <ChartWrapper>
                          {(width) => (
                            <BarChart width={width} height={280} data={analytics.brandChartData} layout="vertical" margin={{ left: 30, right: 20 }}>
                              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                              <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontFamily: "'Inter', sans-serif"}} />
                              <YAxis dataKey="brand" type="category" axisLine={false} tickLine={false} tick={{fill: '#0f172a', fontSize: 12, fontWeight: 500, fontFamily: "'Inter', sans-serif"}} dx={-10} />
                              <Tooltip formatter={(value) => [value, 'Geräte']} cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '4px', border: '1px solid #cbd5e1', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem'}} />
                              <Bar dataKey="count" fill="#1d3a8f" radius={[0, 2, 2, 0]} barSize={16} />
                            </BarChart>
                          )}
                        </ChartWrapper>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div style={{ background: '#fff', padding: '40px 20px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center', marginBottom: '24px' }}>
                    <BarChart2 size={32} color="#94a3b8" style={{ marginBottom: '12px' }} />
                    <h4 style={{ margin: '0 0 4px 0', color: '#1e293b', fontSize: '1rem' }}>Keine Verkaufsdaten</h4>
                    <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Sobald Geräte verkauft werden, erscheinen hier die Statistiken.</p>
                  </div>
                )}

                {/* STORAGE CLEANUP ACTION */}
                {soldPhones.length > 0 && (
                  <div style={{ background: '#fefce8', border: '1px solid #fef08a', padding: '16px 20px', borderRadius: '8px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <AlertTriangle color="#a16207" size={20} style={{ marginTop: '2px' }}/>
                      <div>
                        <h4 style={{ margin: '0 0 4px 0', color: '#854d0e', fontSize: '0.95rem' }}>Speicherplatz bereinigen</h4>
                        <p style={{ margin: 0, color: '#713f12', fontSize: '0.85rem', maxWidth: '600px', lineHeight: 1.4 }}>
                          Bilder verkaufter Geräte können hier nach 14 Tagen gelöscht werden, um Speicher zu sparen. Der Verkaufseintrag selbst bleibt erhalten.
                        </p>
                      </div>
                    </div>
                    <button onClick={handleCleanup} disabled={cleaning} style={{ background: '#fff', color: '#a16207', border: '1px solid #fde047', padding: '8px 16px', borderRadius: '6px', fontWeight: 500, fontSize: '0.85rem', cursor: cleaning ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', transition: 'background 0.15s', fontFamily: "'Inter', sans-serif" }}
                      onMouseOver={e => !cleaning && (e.currentTarget.style.background = '#fef9c3')}
                      onMouseOut={e => !cleaning && (e.currentTarget.style.background = '#fff')}>
                      <RefreshCcw size={14} /> {cleaning ? 'Lösche...' : 'Alte Bilder löschen (>14 Tage)'}
                    </button>
                  </div>
                )}

                {/* SOLD ARCHIVE TABLE */}
                <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ padding: '16px 20px', borderBottom: '1px solid #e2e8f0' }}>
                    <h3 style={{ margin: 0, color: '#1e293b', fontSize: '1.1rem', fontWeight: 600 }}>Historie (Verkaufte Geräte)</h3>
                  </div>
                  
                  {loadingPhones ? (
                    <p style={{ color: '#64748b', padding: '20px' }}>Lade Daten...</p>
                  ) : soldPhones.length === 0 ? (
                    <div style={{ padding: '40px', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>Bisher keine Verkäufe.</div>
                  ) : (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px', fontSize: '0.9rem' }}>
                        <thead>
                          <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.02em', fontWeight: 600, background: '#f8fafc' }}>
                            <th style={{ padding: '12px 20px' }}>Bild</th>
                            <th style={{ padding: '12px 20px' }}>Gerät</th>
                            <th style={{ padding: '12px 20px' }}>Verkaufspreis</th>
                            <th style={{ padding: '12px 20px' }}>Verkaufsdatum</th>
                            <th style={{ padding: '12px 20px' }}>Bild-Status</th>
                            <th style={{ padding: '12px 20px', textAlign: 'right' }}>Aktionen</th>
                          </tr>
                        </thead>
                        <tbody>
                          {soldPhones.map(p => {
                            let soldDate = 'Unbekannt';
                            if (p.soldAt && p.soldAt.toDate) soldDate = p.soldAt.toDate().toLocaleDateString('de-DE');
                            else if (p.updatedAt && p.updatedAt.toDate) soldDate = p.updatedAt.toDate().toLocaleDateString('de-DE');

                            return (
                              <tr key={p.id} style={{ borderBottom: '1px solid #f1f5f9' }} onMouseOver={e => e.currentTarget.style.background = '#f8fafc'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                                <td style={{ padding: '12px 20px' }}>
                                  {p.imageUrls && p.imageUrls[0] ? (
                                    <img src={p.imageUrls[0]} alt="thumb" style={{ width: '36px', height: '36px', objectFit: 'cover', borderRadius: '4px', opacity: 0.7 }} />
                                  ) : (
                                    <div style={{ width: '36px', height: '36px', background: '#f1f5f9', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.65rem' }}>N/A</div>
                                  )}
                                </td>
                                <td style={{ padding: '12px 20px' }}>
                                  <div style={{ fontWeight: 500, color: '#334155' }}>{p.brand} {p.model}</div>
                                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>{p.storage} | {p.condition}</div>
                                </td>
                                <td style={{ padding: '12px 20px', fontWeight: 600, color: '#0f172a' }}>{formatEUR(p.price)}</td>
                                <td style={{ padding: '12px 20px', color: '#64748b', fontSize: '0.85rem' }}>{soldDate}</td>
                                <td style={{ padding: '12px 20px' }}>
                                  {p.imagesCleaned ? (
                                    <span style={{ color: '#dc2626', fontSize: '0.75rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#fef2f2', border: '1px solid #fee2e2', padding: '2px 6px', borderRadius: '4px' }}>Gelöscht</span>
                                  ) : (
                                    <span style={{ color: '#16a34a', fontSize: '0.75rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#f0fdf4', border: '1px solid #dcfce3', padding: '2px 6px', borderRadius: '4px' }}>Gespeichert</span>
                                  )}
                                </td>
                                <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                                  <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                                    <button onClick={() => handleReactivate(p.id)} style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#334155', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', transition: 'background 0.15s', fontFamily: "'Inter', sans-serif" }} title="Zurück ins Inventar verschieben (Status: Verfügbar)" onMouseOver={e => e.currentTarget.style.background = '#f8fafc'} onMouseOut={e => e.currentTarget.style.background = '#fff'}>
                                      <CornerUpLeft size={14} /> Reaktivieren
                                    </button>
                                    <button onClick={() => handleDeleteSold(p.id)} style={{ background: '#fff', border: '1px solid #fecaca', color: '#dc2626', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', transition: 'background 0.15s', fontFamily: "'Inter', sans-serif" }} title="Verkaufseintrag dauerhaft löschen" onMouseOver={e => e.currentTarget.style.background = '#fef2f2'} onMouseOut={e => e.currentTarget.style.background = '#fff'}>
                                      <Trash2 size={14} /> Löschen
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </>
            )}

          </>
        ) : (
          <AdminPhoneForm 
            phone={editingPhone} 
            onSuccess={() => { setShowForm(false); loadPhones(); }} 
            onCancel={() => setShowForm(false)} 
          />
        )}
      </div>
    </div>
  );
}

function StatCard({ title, value, color, icon, subtitle }) {
  return (
    <div style={{ background: '#fff', padding: '16px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #e2e8f0' }}>
      <div style={{ background: `${color}10`, padding: '12px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </div>
      <div style={{ overflow: 'hidden' }}>
        <p style={{ margin: '0 0 4px 0', color: '#64748b', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.02em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</p>
        <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</h3>
        {subtitle && <p style={{ margin: '2px 0 0 0', color: '#475569', fontSize: '0.8rem' }}>{subtitle}</p>}
      </div>
    </div>
  );
}

const tabStyle = (isActive) => ({
  background: isActive ? '#fff' : 'transparent',
  color: isActive ? '#0f172a' : '#64748b',
  border: 'none',
  padding: '12px 20px',
  borderRadius: '6px 6px 0 0',
  fontWeight: 500,
  fontSize: '0.95rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  borderBottom: isActive ? '2px solid #1d3a8f' : '2px solid transparent',
  borderTop: isActive ? '1px solid #cbd5e1' : '1px solid transparent',
  borderLeft: isActive ? '1px solid #cbd5e1' : '1px solid transparent',
  borderRight: isActive ? '1px solid #cbd5e1' : '1px solid transparent',
  transition: 'all 0.15s',
  fontFamily: "'Inter', sans-serif"
});
