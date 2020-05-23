// Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
let p = document.querySelectorAll('p');

for(let elem of p){
  elem.addEventListener('click', function(){
    this.innerHTML = Number(this.innerHTML) ** 2;
  });
}
