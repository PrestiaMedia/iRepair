import React, { useState } from 'react';
import { repairCategories, repairBrands } from '../data/repairData';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubMenu = (e, menuId) => {
    e.preventDefault();
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

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
                            position: absolute !important;
                            top: 100% !important;
                            left: 0 !important;
                            width: 100% !important;
                            background-color: #ffffff !important;
                            z-index: 999999 !important;
                            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
                            border-top: 1px solid #eaeaea;
                          }
                          .main-navigation.toggled ul {
                            list-style: none !important;
                            margin: 0 !important;
                            padding: 0 !important;
                          }
                          .main-navigation.toggled ul.main-header-menu {
                            display: flex !important;
                            flex-direction: column !important;
                            width: 100% !important;
                          }
                          .main-navigation.toggled ul.main-header-menu > li {
                            width: 100% !important;
                            margin: 0 !important;
                            padding: 0 !important;
                          }
                          .main-navigation.toggled a.menu-link {
                            padding: 15px 25px !important;
                            font-size: 18px !important;
                            line-height: 1.5 !important;
                            color: #1a1a1a !important;
                            text-decoration: none !important;
                            border-bottom: 1px solid #eaeaea !important;
                            display: flex !important;
                            justify-content: space-between !important;
                            align-items: center !important;
                            width: 100%;
                            box-sizing: border-box;
                          }
                          .main-navigation.toggled ul.sub-menu {
                            opacity: 1 !important;
                            visibility: visible !important;
                            display: none !important;
                            position: static !important;
                            width: 100% !important;
                            box-shadow: none !important;
                            background: #f8f9fa !important;
                          }
                          .main-navigation.toggled ul.sub-menu a.menu-link {
                            font-size: 16px !important;
                            line-height: 1.5 !important;
                            padding: 12px 25px 12px 40px !important;
                            border-bottom: 1px solid #f1f1f1 !important;
                          }
                          .main-navigation.toggled ul.nested-sub-menu {
                            background: #f1f1f1 !important;
                          }
                          .main-navigation.toggled ul.nested-sub-menu a.menu-link {
                            font-size: 15px !important;
                            line-height: 1.5 !important;
                            padding: 10px 25px 10px 55px !important;
                            border-bottom: 1px solid #e5e5e5 !important;
                          }
                          .main-navigation.toggled .menu-chevron {
                            transition: transform 0.2s;
                          }
                          .main-navigation.toggled li.expanded > a .menu-chevron {
                            transform: rotate(90deg) !important;
                          }
                          .main-navigation.toggled li.expanded > ul.sub-menu {
                            opacity: 1 !important;
                            visibility: visible !important;
                            display: block !important;
                          }
                          .main-navigation .ast-menu-toggle,
                          .main-navigation .ast-icon,
                          .main-navigation .menu-item-has-children > a::after {
                            display: none !important;
                            opacity: 0 !important;
                            visibility: hidden !important;
                            content: none !important;
                            width: 0 !important;
                            height: 0 !important;
                          }
                          .button-custom-menu-item {
                            padding: 20px 25px !important;
                            border-bottom: none !important;
                          }
                          .ast-custom-button-link {
                            display: block !important;
                            width: 100% !important;
                            text-align: center !important;
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
                          position: relative;
                        }
                        ul.sub-menu {
                          position: absolute;
                          top: 100%;
                          left: 0;
                          display: none;
                          background: #fff;
                          min-width: 200px;
                          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                          padding: 10px 0;
                          z-index: 9999;
                        }
                        li:hover > ul.sub-menu {
                          display: block;
                        }
                        ul.nested-sub-menu {
                          top: 0 !important;
                          left: 100% !important;
                        }
                        ul.sub-menu li {
                          position: relative;
                          padding: 8px 20px;
                        }
                        ul.sub-menu li a {
                          color: #333;
                          text-decoration: none;
                          display: block;
                        }
                        ul.sub-menu li:hover {
                          background: #f5f5f5;
                        }
                      }
                    `}</style>
                    <div className={`main-navigation ${isMobileMenuOpen ? 'toggled' : ''}`}>
                      <ul 
                        id="primary-menu" 
                        className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex ast-justify-content-flex-end submenu-with-border ast-mega-menu-enabled"
                      >
                        
                        <li id="menu-item-9691" className={`menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children menu-item-9691 ${expandedMenus['home'] ? 'expanded' : ''}`}>
                          <a aria-expanded={expandedMenus['home'] ? "true" : "false"} href="#" onClick={(e) => toggleSubMenu(e, 'home')} className="menu-link" style={{display: 'flex', alignItems: 'center'}}>
                            <span className="menu-text">Handy Reparatur Ingolstadt</span>
                            <svg className="menu-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}><polyline points="6 9 12 15 18 9"></polyline></svg>
                          </a>
                          
                          <ul className="sub-menu" style={{ display: expandedMenus['home'] ? 'block' : 'none', opacity: 1, visibility: 'visible' }}>
                            <li id="menu-item-10053" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-10053">
                              <a href="/#ueberuns" className="menu-link"><span className="menu-text">Über uns</span></a>
                            </li>
                          </ul>
                        </li>

                        <li id="menu-item-9918" className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-9918 ${expandedMenus['leistungen'] ? 'expanded' : ''}`}>
                          <a aria-expanded={expandedMenus['leistungen'] ? "true" : "false"} href="#" onClick={(e) => toggleSubMenu(e, 'leistungen')} className="menu-link" style={{display: 'flex', alignItems: 'center'}}>
                            <span className="menu-text">Leistungen</span>
                            <svg className="menu-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}><polyline points="6 9 12 15 18 9"></polyline></svg>
                          </a>
                          
                          <ul className="sub-menu" style={{ display: expandedMenus['leistungen'] ? 'block' : 'none', opacity: 1, visibility: 'visible' }}>
                            {repairCategories.map(cat => (
                              <li key={cat.id} className={`menu-item menu-item-has-children ${expandedMenus[`cat-${cat.id}`] ? 'expanded' : ''}`}>
                                <a href="#" onClick={(e) => toggleSubMenu(e, `cat-${cat.id}`)} className="menu-link" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <span className="menu-text">{cat.name}</span>
                                  <svg className="menu-chevron" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expandedMenus[`cat-${cat.id}`] ? 'rotate(90deg)' : 'rotate(-90deg)' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </a>
                                <ul className="sub-menu nested-sub-menu" style={{ display: expandedMenus[`cat-${cat.id}`] ? 'block' : 'none', opacity: 1, visibility: 'visible' }}>
                                  {repairBrands[cat.id]?.map(brand => (
                                    <li key={brand.slug} className="menu-item">
                                      <a href={`/leistungen/${cat.slug}/${brand.slug}`} className="menu-link">
                                        <span className="menu-text">{brand.name}</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                            <li className="menu-item">
                              <a href="/leistungen/handyvertrag" className="menu-link"><span className="menu-text">Handyvertrag</span></a>
                            </li>
                          </ul>
                        </li>

                        <li id="menu-item-10051" className={`menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-10051 ${expandedMenus['standorte'] ? 'expanded' : ''}`}>
                          <a aria-expanded={expandedMenus['standorte'] ? "true" : "false"} href="#" onClick={(e) => toggleSubMenu(e, 'standorte')} className="menu-link" style={{display: 'flex', alignItems: 'center'}}>
                            <span className="menu-text">Standorte</span>
                            <svg className="menu-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}><polyline points="6 9 12 15 18 9"></polyline></svg>
                          </a>
                          
                          <ul className="sub-menu" style={{ display: expandedMenus['standorte'] ? 'block' : 'none', opacity: 1, visibility: 'visible' }}>
                            <li id="menu-item-10052" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-10052">
                              <a href="/standorte/stadtmitte" className="menu-link"><span className="menu-text">iRepairStore – Stadtmitte</span></a>
                            </li>
                            <li id="menu-item-10054" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-10054">
                              <a href="/standorte/westpark" className="menu-link"><span className="menu-text">iRepairStore – Westpark</span></a>
                            </li>
                          </ul>
                        </li>

                        <li id="menu-item-gebraucht" className="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/gebrauchte-handys" className="menu-link" style={{display: 'flex', alignItems: 'center'}}><span className="menu-text">Gebrauchte Handys</span></a>
                        </li>

                        <li id="menu-item-9690" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9690">
                          <a href="/#preisanfrage" className="menu-link" style={{display: 'flex', alignItems: 'center'}} onClick={() => setIsMobileMenuOpen(false)}><span className="menu-text">Kontakt</span></a>
                        </li>
                        
                        <li className="ast-masthead-custom-menu-items button-custom-menu-item">
                          <a className="ast-custom-button-link" href="/#preisanfrage" target="_self" role="button" aria-label="Preis anfragen" onClick={() => setIsMobileMenuOpen(false)}>
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
