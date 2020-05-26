// Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.
let select = document.querySelector('select');

for(let elem of select){
  elem.innerHTML += elem.value;
}
