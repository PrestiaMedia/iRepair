const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'PreisanfrageForm.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add failedFields state
content = content.replace(
  "const [showModelDropdown, setShowModelDropdown] = useState(false);",
  "const [showModelDropdown, setShowModelDropdown] = useState(false);\n  const [failedFields, setFailedFields] = useState([]);"
);

// 2. Update handleInputChange to clear errors
content = content.replace(
  "    setFormData(prev => ({\n      ...prev,\n      [name]: type === 'checkbox' ? checked : value\n    }));",
  "    setFormData(prev => ({\n      ...prev,\n      [name]: type === 'checkbox' ? checked : value\n    }));\n    setFailedFields(prev => prev.filter(f => f !== name));"
);

// 3. Update validateStep1
content = content.replace(
  `  const validateStep1 = () => {
    if (!formData.category || !formData.repairMethod) return false;
    
    if (formData.category === 'Sonstiges Gerät') {
      if (!formData.customBrand || !formData.customModel || !formData.customIssue) return false;
    } else {
      if (!formData.brand) return false;
      if (formData.brand === 'Andere / nicht gelistet') {
        if (!formData.customBrand || !formData.customModel) return false;
      } else {
        if (!formData.model && formData.model !== 'Mein Modell ist nicht dabei' && !formData.customModel) return false;
        if (formData.model === 'Mein Modell ist nicht dabei' && !formData.customModel) return false;
      }
      
      if (!formData.issue) return false;
      if (formData.issue === 'Sonstiges Problem' && !formData.customIssue) return false;
    }
    
    return true;
  };`,
  `  const validateStep1 = () => {
    let failed = [];
    if (!formData.category) failed.push('category');
    if (!formData.repairMethod) failed.push('repairMethod');
    
    if (formData.category === 'Sonstiges Gerät') {
      if (!formData.customBrand) failed.push('customBrand');
      if (!formData.customModel) failed.push('customModel');
      if (!formData.customIssue) failed.push('customIssue');
    } else if (formData.category) {
      if (!formData.brand) failed.push('brand');
      if (formData.brand === 'Andere / nicht gelistet') {
        if (!formData.customBrand) failed.push('customBrand');
        if (!formData.customModel) failed.push('customModel');
      } else if (formData.brand) {
        if (!formData.model && formData.model !== 'Mein Modell ist nicht dabei' && !formData.customModel) failed.push('modelSearch');
        if (formData.model === 'Mein Modell ist nicht dabei' && !formData.customModel) failed.push('customModel');
      }
      
      if (!formData.issue) failed.push('issue');
      if (formData.issue === 'Sonstiges Problem' && !formData.customIssue) failed.push('customIssue');
    }
    
    setFailedFields(failed);
    return failed.length === 0;
  };`
);

// 4. Update validateStep2
content = content.replace(
  `  const validateStep2 = () => {
    if (!formData.contactMethod || !formData.name || !formData.privacyAccepted) return false;
    if (formData.contactMethod === 'Email' && !formData.email) return false;
    if (formData.contactMethod === 'Telefon' && !formData.phone) return false;
    return true;
  };`,
  `  const validateStep2 = () => {
    let failed = [];
    if (!formData.contactMethod) failed.push('contactMethod');
    if (!formData.name) failed.push('name');
    if (!formData.privacyAccepted) failed.push('privacyAccepted');
    if (formData.contactMethod === 'Email' && !formData.email) failed.push('email');
    if (formData.contactMethod === 'Telefon' && !formData.phone) failed.push('phone');
    setFailedFields(failed);
    return failed.length === 0;
  };`
);

// 5. Add getInputStyle function
content = content.replace(
  "  const inputStyle = {",
  `  const getInputStyle = (fieldName) => ({
    ...inputStyle,
    borderColor: failedFields.includes(fieldName) ? '#dc3545' : '#ccc',
    backgroundColor: failedFields.includes(fieldName) ? '#fff8f8' : '#fff'
  });\n\n  const inputStyle = {`
);

// 6. Replace inline styles
let newContent = content;

newContent = newContent.replace(
  `<select name="category" value={formData.category} onChange={handleInputChange} style={inputStyle}>`, 
  `<select name="category" value={formData.category} onChange={handleInputChange} style={getInputStyle('category')}>`
);

newContent = newContent.replace(
  `<input type="text" name="customBrand" value={formData.customBrand} onChange={handleInputChange} style={inputStyle} placeholder="Z.B. Dyson, Vorwerk, DJI..." />`,
  `<input type="text" name="customBrand" value={formData.customBrand} onChange={handleInputChange} style={getInputStyle('customBrand')} placeholder="Z.B. Dyson, Vorwerk, DJI..." />`
);

newContent = newContent.replace(
  `<select name="brand" value={formData.brand} onChange={handleInputChange} style={inputStyle}>`,
  `<select name="brand" value={formData.brand} onChange={handleInputChange} style={getInputStyle('brand')}>`
);

newContent = newContent.replace(
  `<input type="text" name="customBrand" value={formData.customBrand} onChange={handleInputChange} style={inputStyle} placeholder="Z.B. Nothing, CMF..." />`,
  `<input type="text" name="customBrand" value={formData.customBrand} onChange={handleInputChange} style={getInputStyle('customBrand')} placeholder="Z.B. Nothing, CMF..." />`
);

newContent = newContent.replace(
  `<input type="text" value={modelSearch} onChange={(e) => { setModelSearch(e.target.value); setShowModelDropdown(true); }} onFocus={() => setShowModelDropdown(true)} onBlur={() => setTimeout(() => setShowModelDropdown(false), 200)} style={inputStyle} placeholder="Z.B. iPhone 15 Pro..." />`,
  `<input type="text" value={modelSearch} onChange={(e) => { setModelSearch(e.target.value); setShowModelDropdown(true); setFailedFields(prev => prev.filter(f => f !== 'modelSearch')); }} onFocus={() => setShowModelDropdown(true)} onBlur={() => setTimeout(() => setShowModelDropdown(false), 200)} style={getInputStyle('modelSearch')} placeholder="Z.B. iPhone 15 Pro..." />`
);

newContent = newContent.replace(
  `name="customModel" value={formData.customModel} onChange={handleInputChange} style={{...inputStyle, marginBottom: 0}}`,
  `name="customModel" value={formData.customModel} onChange={handleInputChange} style={{...getInputStyle('customModel'), marginBottom: 0}}`
);
// replace multiple occurrences of customModel (e.g. for Sonstiges Gerät, Andere Brand, Mein Modell ist nicht dabei)
newContent = newContent.replaceAll(
  `name="customModel" value={formData.customModel} onChange={handleInputChange} style={{...inputStyle, marginBottom: 0}}`,
  `name="customModel" value={formData.customModel} onChange={handleInputChange} style={{...getInputStyle('customModel'), marginBottom: 0}}`
);

newContent = newContent.replace(
  `<select name="issue" value={formData.issue} onChange={handleInputChange} style={inputStyle}>`,
  `<select name="issue" value={formData.issue} onChange={handleInputChange} style={getInputStyle('issue')}>`
);

newContent = newContent.replaceAll(
  `name="customIssue" value={formData.customIssue} onChange={handleInputChange} style={{...inputStyle, marginBottom: 0}}`,
  `name="customIssue" value={formData.customIssue} onChange={handleInputChange} style={{...getInputStyle('customIssue'), marginBottom: 0}}`
);

newContent = newContent.replace(
  `<select name="repairMethod" value={formData.repairMethod} onChange={handleInputChange} style={inputStyle}>`,
  `<select name="repairMethod" value={formData.repairMethod} onChange={handleInputChange} style={getInputStyle('repairMethod')}>`
);

newContent = newContent.replace(
  `<select name="contactMethod" value={formData.contactMethod} onChange={handleInputChange} style={inputStyle}>`,
  `<select name="contactMethod" value={formData.contactMethod} onChange={handleInputChange} style={getInputStyle('contactMethod')}>`
);

newContent = newContent.replace(
  `<input type="text" name="name" value={formData.name} onChange={handleInputChange} style={inputStyle} placeholder="Max Mustermann" />`,
  `<input type="text" name="name" value={formData.name} onChange={handleInputChange} style={getInputStyle('name')} placeholder="Max Mustermann" />`
);

newContent = newContent.replace(
  `<input type="email" name="email" value={formData.email} onChange={handleInputChange} style={inputStyle} placeholder="max@beispiel.de" />`,
  `<input type="email" name="email" value={formData.email} onChange={handleInputChange} style={getInputStyle('email')} placeholder="max@beispiel.de" />`
);

newContent = newContent.replace(
  `<input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} style={inputStyle} placeholder="0170 1234567" />`,
  `<input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} style={getInputStyle('phone')} placeholder="0170 1234567" />`
);

newContent = newContent.replace(
  `name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleInputChange} style={{ marginTop: '5px', marginRight: '15px', cursor: 'pointer', transform: 'scale(1.2)' }}`,
  `name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleInputChange} style={{ marginTop: '5px', marginRight: '15px', cursor: 'pointer', transform: 'scale(1.2)', outline: failedFields.includes('privacyAccepted') ? '2px solid red' : 'none', outlineOffset: '2px' }}`
);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Modifications applied successfully');
