const fs = require('fs');
const content = fs.readFileSync('./src/App.tsx', 'utf8');
const start = content.indexOf('<svg width="4369"');
const end = content.indexOf('</svg>', start);
const svg = content.substring(start, end + 6);

const paths = svg.match(/<path[^>]*>/g) || [];
console.log('Total paths:', paths.length);

const noFillPaths = paths.filter(p => !p.includes('fill='));
console.log('Paths without fill:', noFillPaths.length);

const whitePaths = paths.filter(p => p.includes('fill="white"'));
console.log('Paths with fill="white":', whitePaths.length);

const strokePaths = paths.filter(p => p.includes('stroke='));
console.log('Paths with stroke:', strokePaths.length);

const transparentPaths = paths.filter(p => p.includes('fill="transparent"'));
console.log('Paths with transparent fill:', transparentPaths.length);

const polygons = svg.match(/<polygon[^>]*>/g) || [];
console.log('Total polygons:', polygons.length);

const rects = svg.match(/<rect[^>]*>/g) || [];
console.log('Total rects:', rects.length);
