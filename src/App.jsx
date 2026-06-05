import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ContactFooterInfo from './components/ContactFooterInfo';
import CookieBanner from './components/CookieBanner';

import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

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
