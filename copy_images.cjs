const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\davin\\.gemini\\antigravity\\brain\\6d51c8d6-2773-44b7-b788-eef0b50ce2a4';
const dest = 'C:\\Users\\davin\\Desktop\\BM\\iRepair\\public\\images';

const files = fs.readdirSync(src);
files.forEach(f => {
  if (f.includes('_repair_') && f.endsWith('.png')) {
    const newName = f.replace(/_\d{13}\.png$/, '.png');
    fs.copyFileSync(path.join(src, f), path.join(dest, newName));
    console.log(`Copied ${f} to ${newName}`);
  }
});
