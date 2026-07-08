import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ContactFooterInfo from './components/ContactFooterInfo';
import CookieBanner from './components/CookieBanner';

import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import UsedPhones from './pages/UsedPhones';
import DeviceRepairTemplate from './pages/DeviceRepairTemplate';
import Handyvertrag from './pages/Handyvertrag';
import Stadtmitte from './pages/Stadtmitte';
import Westpark from './pages/Westpark';

import { useEffect } from 'react';

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);
  return null;
}


function DynamicTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = "Handy Reparatur in Ingolstadt | iRepairStore24";
    
    if (pathname === '/') {
      title = "Handy Reparatur in Ingolstadt | iRepairStore24";
    } else if (pathname === '/impressum') {
      title = "Impressum | iRepairStore24";
    } else if (pathname === '/datenschutz') {
      title = "Datenschutz | iRepairStore24";
    } else if (pathname === '/gebrauchte-handys') {
      title = "Gebrauchte Handys kaufen Ingolstadt | Geprüft mit Garantie | iRepairStore24";
    } else if (pathname === '/leistungen/handyvertrag') {
      title = "Handyvertrag & Tarife in Ingolstadt | iRepairStore24";
    } else if (pathname === '/standorte/stadtmitte') {
      title = "iRepairStore Stadtmitte Ingolstadt | Reparatur vor Ort";
    } else if (pathname === '/standorte/westpark') {
      title = "iRepairStore Westpark Ingolstadt | Reparatur & Service";
    } else if (pathname.startsWith('/leistungen/')) {
      const parts = pathname.split('/');
      if (parts.length >= 4) {
        let brand = parts[2].charAt(0).toUpperCase() + parts[2].slice(1);
        let device = parts[3].split('-').map(word => {
          if (word.toLowerCase() === 'iphone') return 'iPhone';
          if (word.toLowerCase() === 'ipad') return 'iPad';
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
        title = `${brand} ${device} Reparatur in Ingolstadt | iRepairStore24`;
      }
    }
    
    document.title = title;
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div id="page" className="site">
        <Header />
        <div id="content" className="site-content">
          <div className="ast-container">
            <div id="primary" className="content-area primary">
              <main id="main" className="site-main">
                <article className="post-9623 page type-page status-publish ast-article-single">
                  <div className="entry-content clear" itemProp="text">
                    <div className="fl-builder-content fl-builder-content-9623 fl-builder-content-primary fl-builder-global-templates-locked" data-post-id="9623">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/impressum" element={<Impressum />} />
                        <Route path="/datenschutz" element={<Datenschutz />} />
                        <Route path="/admin/login" element={<AdminLogin />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/gebrauchte-handys" element={<UsedPhones />} />
                        <Route path="/leistungen/:categorySlug/:brandSlug" element={<DeviceRepairTemplate />} />
                        <Route path="/leistungen/handyvertrag" element={<Handyvertrag />} />
                        <Route path="/standorte/stadtmitte" element={<Stadtmitte />} />
                        <Route path="/standorte/westpark" element={<Westpark />} />
                      </Routes>
                      <ContactFooterInfo />
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
      <CookieBanner />
    </Router>
  );
}

export default App;
