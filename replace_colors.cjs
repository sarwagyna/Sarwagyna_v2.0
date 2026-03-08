const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /#4F8DFF/gi, replacement: 'white' },
  { regex: /#A259FF/gi, replacement: '#D1D5DB' },
  { regex: /#00E5C3/gi, replacement: '#9CA3AF' },
  { regex: /#FF6B6B/gi, replacement: '#D1D5DB' },
  { regex: /#F5C842/gi, replacement: 'white' },
  { regex: /#9B59F5/gi, replacement: '#D1D5DB' },
  { regex: /#38BDF8/gi, replacement: '#9CA3AF' },
  { regex: /#10B981/gi, replacement: '#6B7280' },
  { regex: /#04060F/gi, replacement: 'black' },
  { regex: /#F0F4FF/gi, replacement: 'white' },
  { regex: /rgba\(79,141,255/g, replacement: 'rgba(255,255,255' },
  { regex: /rgba\(162,89,255/g, replacement: 'rgba(209,213,219' },
  { regex: /rgba\(0,229,195/g, replacement: 'rgba(156,163,175' },
  { regex: /rgba\(255,107,107/g, replacement: 'rgba(209,213,219' },
  { regex: /rgba\(245,200,66/g, replacement: 'rgba(255,255,255' },
  { regex: /from-\[white\]/g, replacement: 'from-white' },
  { regex: /to-\[white\]/g, replacement: 'to-white' },
  { regex: /via-\[white\]/g, replacement: 'via-white' },
  { regex: /bg-\[white\]/g, replacement: 'bg-white' },
  { regex: /text-\[white\]/g, replacement: 'text-white' },
  { regex: /border-\[white\]/g, replacement: 'border-white' },
  { regex: /bg-\[black\]/g, replacement: 'bg-black' },
  { regex: /text-\[black\]/g, replacement: 'text-black' },
  { regex: /border-\[black\]/g, replacement: 'border-black' },
  { regex: /#D1D5DB/gi, replacement: 'white' },
  { regex: /#9CA3AF/gi, replacement: 'white' },
  { regex: /#6B7280/gi, replacement: 'white' },
  { regex: /purple-500/g, replacement: 'gray-500' },
  { regex: /purple-600/g, replacement: 'black' },
  { regex: /purple-700/g, replacement: 'gray-800' },
  { regex: /purple-50/g, replacement: 'gray-100' },
  { regex: /blue-600/g, replacement: 'black' },
  { regex: /blue-500/g, replacement: 'gray-500' },
  { regex: /blue-700/g, replacement: 'gray-800' },
  { regex: /blue-50/g, replacement: 'gray-100' },
  { regex: /green-600/g, replacement: 'black' },
  { regex: /green-500/g, replacement: 'gray-500' },
  { regex: /green-700/g, replacement: 'gray-800' },
  { regex: /green-50/g, replacement: 'gray-100' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  }
}

processDirectory('./src');
