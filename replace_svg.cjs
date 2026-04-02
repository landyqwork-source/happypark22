const fs = require('fs');
const path = './src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

const startStr = '<svg width="4369" height="2491" viewBox="0 0 4369 2491" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
const endStr = '</svg>';

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr, startIndex) + endStr.length;

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `        {/* ========================================================================= */}
        {/* МЕСТО ДЛЯ ВАШЕГО SVG КОДА ИНТЕРАКТИВНОЙ КАРТЫ */}
        {/* 
            Формат и структура вашего SVG:
            1. Нижний слой: тег <image> с фотографией генплана.
            2. Средние слои: обводка, цифры, декоративные элементы.
            3. Верхний слой: интерактивные участки (<path>, <polygon> или <rect>).
            
            ВАЖНО ДЛЯ ИНТЕРАКТИВНОСТИ:
            - У каждого интерактивного участка должен быть атрибут id, строго совпадающий 
              с номером участка в первой колонке вашей Google Таблицы (например, id="1").
            - Чтобы участки реагировали на мышь (даже если они изначально прозрачные), 
              у них должна быть заливка. Добавьте им атрибут fill="transparent" 
              (или style={{ fill: 'transparent' }} в React).
            - Код ниже автоматически найдет эти элементы по id и будет менять их цвет 
              при наведении и в зависимости от статуса.
        */}
        {/* ВСТАВЬТЕ ВАШ ТЕГ <svg> ... </svg> ПРЯМО ПОД ЭТИМ КОММЕНТАРИЕМ */}
        {/* ========================================================================= */}
        
        <div className="w-full h-full min-h-[400px] flex items-center justify-center border-2 border-dashed border-white/20 rounded-xl">
          <p className="text-white/50 text-center">
            Вставьте ваш SVG код карты сюда.<br/>
            Смотрите комментарии в коде (src/App.tsx, компонент InteractiveMap) для инструкций.
          </p>
        </div>`;
  
  content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
  fs.writeFileSync(path, content, 'utf8');
  console.log('SVG replaced successfully.');
} else {
  console.log('SVG not found.');
}
