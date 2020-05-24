// Даны элементы:
// <p class="www">elem 1</p>
// <p class="www">elem 2</p>
// <p class="www">elem 3</p>
// Получите эти элементы по имени класса и сделайте их текст красного цвета.
let elems = document.getElementsByClassName('www');

for(let elem of elems){
  elem.style.color = 'red';
}
