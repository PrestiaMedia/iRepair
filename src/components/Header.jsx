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
                  <button type="button" className="menu-toggle main-header-menu-toggle ast-mobile-menu-buttons-minimal" aria-controls="primary-menu" aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <span className="screen-reader-text">Hauptmenü</span>
                    <span className="ast-icon icon-menu-bars"><span className="menu-toggle-icon"></span></span>
                  </button>
                </div>
              </div>

              <div className="ast-main-header-bar-alignment">
                <div className="main-header-bar-navigation">
                  <nav className="site-navigation ast-flex-grow-1 navigation-accessibility" id="primary-site-navigation" aria-label="Seiten-Navigation" itemType="https://schema.org/SiteNavigationElement" itemScope>
                    <div className={`main-navigation ${isMobileMenuOpen ? 'toggled' : ''}`}>
                      <ul id="primary-menu" className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex ast-justify-content-flex-end submenu-with-border ast-mega-menu-enabled">
                        
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
