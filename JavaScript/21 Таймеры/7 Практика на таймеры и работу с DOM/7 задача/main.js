// Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
let p = document.querySelector('p');

let timer = setInterval(function(){
  if(!(p.style.color == 'red')){
    p.style.color = 'red';
  } else {
    p.style.color = 'green';
  }
  console.log(!(p.style.color == 'red'));
}, 1000);
