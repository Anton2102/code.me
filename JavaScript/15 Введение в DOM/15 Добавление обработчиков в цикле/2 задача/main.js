// Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.
let p = document.querySelectorAll('p');

for(let elem of p){
  elem.addEventListener('click', function(){
    this.innerHTML = Number(this.innerHTML) ** 2;
  });
}
