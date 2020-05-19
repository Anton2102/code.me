// Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
let p4 = document.querySelector('#p4');
let p5 = document.querySelector('#p5');

p1.addEventListener('click', funcAddSymbol);
p2.addEventListener('click', funcAddSymbol);
p3.addEventListener('click', funcAddSymbol);
p4.addEventListener('click', funcAddSymbol);
p5.addEventListener('click', funcAddSymbol);

function funcAddSymbol(){
  this.innerHTML += '!';
}
