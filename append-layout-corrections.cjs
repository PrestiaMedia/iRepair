const fs = require("fs");

const targetPath = "src/index.css";
if (!fs.existsSync(targetPath)) {
    console.error("Target file not found:", targetPath);
    process.exit(1);
}

const customCss = `
/* ==========================================================================
   IREPAIR PRESET LAYOUT OVERRIDES & BRANDING STYLES
   ========================================================================== */

/* Logo Branding & Layout Alignment */
.custom-logo {
    max-height: 60px !important;
    width: auto !important;
}

.main-header-container {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    width: 100% !important;
    max-width: 1200px !important;
    margin: 0 auto !important;
    padding: 10px 20px !important;
}

.ast-main-header-bar-alignment {
    display: flex !important;
    align-items: center !important;
    margin-left: auto !important;
}

.main-header-bar-navigation {
    display: flex !important;
    align-items: center !important;
}

.main-header-menu {
    display: flex !important;
    flex-flow: row nowrap !important;
    align-items: center !important;
    gap: 24px !important;
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
}

.main-header-menu a.menu-link {
    color: #1f2c33 !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    transition: color 0.3s ease !important;
    text-decoration: none !important;
}

.main-header-menu a.menu-link:hover {
    color: #1d3a8f !important;
}

/* Header Action Button (Orange CTA) */
.button-custom-menu-item .ast-custom-button-link .ast-button {
    background-color: #1d3a8f !important;
    color: #ffffff !important;
    padding: 10px 22px !important;
    border-radius: 30px !important;
    font-weight: 700 !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 14px !important;
    border: 2px solid #1d3a8f !important;
    transition: all 0.3s ease !important;
    display: inline-block !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    box-shadow: 0 4px 15px rgba(221, 100, 32, 0.2) !important;
    cursor: pointer !important;
    text-align: center !important;
}

.button-custom-menu-item .ast-custom-button-link .ast-button:hover {
    background-color: transparent !important;
    color: #1d3a8f !important;
    box-shadow: none !important;
}

/* Global Brand Button Overrides */
.uabb-creative-default-btn,
.erstkontakt .uabb-creative-default-btn {
    background-color: #1d3a8f !important;
    color: #ffffff !important;
    border-radius: 30px !important;
    border: 2px solid #1d3a8f !important;
    padding: 12px 28px !important;
    font-weight: 700 !important;
    font-family: 'Inter', sans-serif !important;
    text-transform: uppercase !important;
    transition: all 0.3s ease !important;
    cursor: pointer !important;
    box-shadow: 0 4px 15px rgba(221, 100, 32, 0.2) !important;
    text-decoration: none !important;
    display: inline-block !important;
}

.uabb-creative-default-btn:hover,
.erstkontakt .uabb-creative-default-btn:hover {
    background-color: transparent !important;
    color: #1d3a8f !important;
    box-shadow: none !important;
}

.uabb-creative-transparent-btn,
.erstkontakt .uabb-creative-transparent-btn {
    background-color: transparent !important;
    color: #1d3a8f !important;
    border-radius: 30px !important;
    border: 2px solid #1d3a8f !important;
    padding: 12px 28px !important;
    font-weight: 700 !important;
    font-family: 'Inter', sans-serif !important;
    text-transform: uppercase !important;
    transition: all 0.3s ease !important;
    cursor: pointer !important;
    text-decoration: none !important;
    display: inline-block !important;
}

.uabb-creative-transparent-btn:hover,
.erstkontakt .uabb-creative-transparent-btn:hover {
    background-color: #1d3a8f !important;
    color: #ffffff !important;
}

/* Desktop Grid and Column Layout Alignment */
@media (min-width: 769px) {
    /* Main column group structures must behave as clean flex containers */
    .fl-col-group {
        display: flex !important;
        flex-flow: row nowrap !important;
        width: 100% !important;
        align-items: stretch !important;
    }
    
    /* Nested column group structures should allow wrap if needed */
    .fl-col-group-nested {
        display: flex !important;
        flex-flow: row wrap !important;
        width: 100% !important;
    }
    
    /* columns reset to support width definitions side-by-side */
    .fl-col {
        float: left !important;
        clear: none !important;
        display: flex !important;
        flex-direction: column !important;
        width: unset !important;
        flex: 0 0 auto !important;
        box-sizing: border-box !important;
    }
    
    /* Width enforcement based on original WP nodes layouts */
    .fl-node-d9fqx8okl5wt { width: 50% !important; } /* Hero text block */
    .fl-node-7dml9413t0cg { width: 50% !important; } /* Hero technician photo */
    
    /* Services grid (Tablet/Laptop/Console buttons rows) */
    .fl-node-mpgc1ydn4xkw { width: 25% !important; }
    .fl-node-7xdlv4gw5bzn { width: 25% !important; }
    .fl-node-mw8ox6fquavp { width: 25% !important; }
    .fl-node-l0hgu5ojnbwa { width: 25% !important; }
    
    /* CTA button banner */
    .fl-node-cpyk5278uni6 { width: 70% !important; }
    .fl-node-dxsalnov3cqm { width: 30% !important; }
    
    /* Services details list items columns */
    .fl-node-9y8zhjxqropv { width: 25% !important; }
    .fl-node-nydpmw4elt7h { width: 25% !important; }
    .fl-node-g92hlvd1r3tc { width: 25% !important; }
    .fl-node-v3aytf7iz91k { width: 25% !important; }
    
    /* Locations & maps double side-by-side layout */
    .fl-node-2pqx1d8rhca7 { width: 50% !important; }
    .fl-node-5el3rkn4tsq0 { width: 50% !important; }
    .fl-node-zynb08mhxfaq { width: 50% !important; }
    .fl-node-17r0zoau59ek { width: 50% !important; }
    
    /* Address info and store photo side-by-side inside location blocks */
    .fl-node-0na245qlfwyi { width: 50% !important; }
    .fl-node-081twour4p2x { width: 50% !important; }
    .fl-node-lqxyzw87vkgr { width: 50% !important; }
    .fl-node-1w7hzos9lc52 { width: 50% !important; }
}
`;

fs.appendFileSync(targetPath, "\n" + customCss + "\n");
console.log("Successfully appended custom layout corrections and styles to index.css!");

