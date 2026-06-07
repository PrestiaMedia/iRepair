const fs = require('fs');
const files = [
  'src/components/Locations.jsx',
  'src/components/DetailsSection.jsx',
  'src/components/ServicesSection.jsx'
];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/ fl-col-small/g, '');
  fs.writeFileSync(f, content);
  console.log(`Updated ${f}`);
});
