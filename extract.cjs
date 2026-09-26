const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\kulvi\\.gemini\\antigravity\\scratch\\kool-website\\src\\data\\caseStudies.ts', 'utf8');
const regex = /const (\w+): CaseStudy = ([\s\S]*?)(?=const \w+: CaseStudy =|\/\*\* Order matters)/g;
let match;
const results = [];
while ((match = regex.exec(content)) !== null) {
  const inner = match[2];
  const title = inner.match(/title:\s*"([^"]+)"/)?.[1];
  const subtitle = inner.match(/subtitle:\s*"([^"]+)"/)?.[1];
  const industry = inner.match(/industry:\s*"([^"]+)"/)?.[1];
  if(title) {
    results.push({id: match[1], title, subtitle, industry});
  }
}
fs.writeFileSync('cases.json', JSON.stringify(results, null, 2));
console.log('Saved to cases.json');
