import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header header-main-layout-1 ast-primary-menu-enabled ast-menu-toggle-icon ast-mobile-header-stack ast-above-header-mobile-stack ast-below-header-mobile-stack" id="masthead" itemType="https://schema.org/WPHeader" itemScope itemID="#masthead">
      <div className="main-header-bar-wrap">
        <div className="main-header-bar">
          <div className="ast-container">
            <div className="ast-flex main-header-container">
              <div className="site-branding">
                <div className="ast-site-identity" itemType="https://schema.org/Organization" itemScope>
                  <span className="site-logo-img">
                    <a href="/" className="custom-logo-link" rel="home" aria-current="page">
                      <img width="280" height="61" src="/images/Logo2-1-280x61.png" className="custom-logo" alt="iRepairStore Logo" decoding="async" />
                    </a>
                  </span>
                </div>
              </div>

              <div className="ast-mobile-menu-buttons">
                <div className="ast-button-wrap">
                  <button type="button" className="menu-toggle main-header-menu-toggle ast-mobile-menu-buttons-minimal" aria-controls="primary-menu" aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', padding: '10px' }}>
                    <span className="screen-reader-text">Hauptmenü</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#1d3a8f' }}>
                      {isMobileMenuOpen ? (
                        <>
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </>
                      ) : (
                        <>
                          <line x1="3" y1="12" x2="21" y2="12"></line>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <line x1="3" y1="18" x2="21" y2="18"></line>
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <div className="ast-main-header-bar-alignment">
                <div className="main-header-bar-navigation">
                  <nav className="site-navigation ast-flex-grow-1 navigation-accessibility" id="primary-site-navigation" aria-label="Seiten-Navigation" itemType="https://schema.org/SiteNavigationElement" itemScope>
                    <style>{`
                      @media (max-width: 921px) {
                        .main-navigation:not(.toggled) {
                          display: none !important;
                        }
                        .main-navigation.toggled {
                          display: block !important;
                          position: fixed !important;
                          top: 0 !important;
                          left: 0 !important;
                          width: 100vw !important;
                          height: 100vh !important;
                          background-color: #ffffff !important;
                          z-index: 999999 !important;
                          overflow-y: auto !important;
                          overflow-x: hidden !important;
                          padding: 80px 20px 20px 20px !important;
                          box-sizing: border-box !important;
                        }
                        .main-navigation.toggled ul.main-header-menu {
                          display: flex !important;
                          flex-direction: column !important;
                          width: 100% !important;
                          margin: 0 !important;
                          padding: 0 !important;
                          background-color: transparent !important;
                        }
                        .main-navigation.toggled ul.main-header-menu > li {
                          width: 100% !important;
                          margin-bottom: 15px !important;
                        }
                      }
                      @media (min-width: 922px) {
                        .main-navigation:not(.toggled) ul.main-header-menu {
                          display: flex !important;
                          align-items: center !important;
                          gap: 20px !important;
                          margin: 0 !important;
                          padding: 0 !important;
                        }
                        .main-navigation:not(.toggled) ul.main-header-menu > li {
                          white-space: nowrap !important;
                        }
                      }
                    `}</style>
                    <div className={`main-navigation ${isMobileMenuOpen ? 'toggled' : ''}`}>
                      {isMobileMenuOpen && (
                        <button 
                          onClick={() => setIsMobileMenuOpen(false)} 
                          style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: 1000000, padding: '10px' }}
                          aria-label="Menü schließen"
                        >
                          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1d3a8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                      )}
                      <ul 
                        id="primary-menu" 
                        className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex ast-justify-content-flex-end submenu-with-border ast-mega-menu-enabled"
                      >
                        
                        <li id="menu-item-9691" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children menu-item-9691">
                          <a aria-expanded="false" href="/" className="menu-link" style={{display: 'flex', alignItems: 'center'}}>
                            <span className="menu-text">Handy Reparatur Ingolstadt</span>
                            <svg className="menu-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}><polyline points="6 9 12 15 18 9"></polyline></svg>
                          </a>
                          <button className="ast-menu-toggle" aria-expanded="false">
                            <span className="screen-reader-text">Menü umschalten</span><span className="ast-icon icon-arrow"></span>
                          </button>
                          <ul className="sub-menu">
                            <li id="menu-item-10053" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-10053">
                              <a href="/#ueberuns" className="menu-link"><span className="ast-icon icon-arrow"></span><span className="menu-text">Über uns</span></a>
                            </li>
                          </ul>
                        </li>

                        <li id="menu-item-9918" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-9918">
                          <a aria-expanded="false" href="#" className="menu-link" style={{display: 'flex', alignItems: 'center'}}>
                            <span className="menu-text">Leistungen</span>
                            <svg className="menu-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}><polyline points="6 9 12 15 18 9"></polyline></svg>
                          </a>
                          <button className="ast-menu-toggle" aria-expanded="false">
                            <span className="screen-reader-text">Menü umschalten</span><span className="ast-icon icon-arrow"></span>
                          </button>
                          <ul className="sub-menu">
                            <li id="menu-item-9842" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9842">
                              <a href="/iphone-reparatur-ingolstadt" className="menu-link"><span className="ast-icon icon-arrow"></span><span className="menu-text">iPhone Reparatur</span></a>
                            </li>
                            <li id="menu-item-9906" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9906">
                              <a href="/handyvertrag" className="menu-link"><span className="ast-icon icon-arrow"></span><span className="menu-text">Handyvertrag</span></a>
                            </li>
                          </ul>
                        </li>

                        <li id="menu-item-10051" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-10051">
                          <a aria-expanded="false" href="#" className="menu-link" style={{display: 'flex', alignItems: 'center'}}>
                            <span className="menu-text">Standorte</span>
                            <svg className="menu-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}><polyline points="6 9 12 15 18 9"></polyline></svg>
                          </a>
                          <button className="ast-menu-toggle" aria-expanded="false">
                            <span className="screen-reader-text">Menü umschalten</span><span className="ast-icon icon-arrow"></span>
                          </button>
                          <ul className="sub-menu">
                            <li id="menu-item-10052" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-10052">
                              <a href="/#stores" className="menu-link"><span className="ast-icon icon-arrow"></span><span className="menu-text">iRepairStore – Stadtmitte</span></a>
                            </li>
                            <li id="menu-item-10054" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-10054">
                              <a href="/#stores" className="menu-link"><span className="ast-icon icon-arrow"></span><span className="menu-text">iRepairStore – Westpark</span></a>
                            </li>
                          </ul>
                        </li>

                        <li id="menu-item-gebraucht" className="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/gebrauchte-handys" className="menu-link" style={{display: 'flex', alignItems: 'center'}}><span className="menu-text">Gebrauchte Handys</span></a>
                        </li>

                        <li id="menu-item-9690" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9690">
                          <a href="/kontakt" className="menu-link" style={{display: 'flex', alignItems: 'center'}}><span className="menu-text">Kontakt</span></a>
                        </li>
                        
                        <li className="ast-masthead-custom-menu-items button-custom-menu-item">
                          <a className="ast-custom-button-link" href="/#preisanfrage" target="_self" role="button" aria-label="Preis anfragen">
                            <div className="ast-button">Preis anfragen</div>
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
