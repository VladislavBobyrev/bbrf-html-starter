// Создаем ссылку на таблицу стилей которые подгрузятся после отрисовки лоадера с первоначальными стилями
const myCSS = document.createElement('link');
myCSS.rel = 'stylesheet';
myCSS.href = './src/style/style.css';
// вставляем ее в конце блока head
document.head.insertBefore(myCSS, document.head.childNodes[document.head.childNodes.length - 1].nextSibling);