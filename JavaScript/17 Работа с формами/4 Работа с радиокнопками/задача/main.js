// Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.
let button = document.querySelector('.button');

button.addEventListener('click', function(){
  let arrRadio = document.querySelectorAll('.radio'),
      p = document.querySelector('.p');

  for(let elem of arrRadio){
    if(elem.checked){
      p.innerHTML = elem.value;
    }
  }
});
