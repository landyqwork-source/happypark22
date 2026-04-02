const fs = require('fs');
const projects = [1, 2, 3, 4];
const roofs = ['flat', 'pitched'];
const colors = ['white', 'gray', 'darkGreen', 'terracotta'];
const sidings = ['wood', 'graphite'];

let out = '  const customImagesConfig: Record<string, string[]> = {\n';
for (let p of projects) {
  out += `    // ==========================================\n`;
  out += `    // ПРОЕКТ ${p}\n`;
  out += `    // ==========================================\n`;
  for (let r of roofs) {
    out += `    // --- ${r === 'flat' ? 'ПЛОСКАЯ КРЫША' : 'КРЫША СО СВЕСАМИ'} ---\n`;
    for (let c of colors) {
      for (let s of sidings) {
        out += `    "${p}-${r}-${c}-${s}": [\n`;
        out += `      "ССЫЛКА_НА_ФОТО_1",\n`;
        out += `      "ССЫЛКА_НА_ФОТО_2",\n`;
        out += `      "ССЫЛКА_НА_ФОТО_3",\n`;
        out += `    ],\n`;
      }
    }
  }
}
out += '  };\n';
fs.writeFileSync('config_block.txt', out);
