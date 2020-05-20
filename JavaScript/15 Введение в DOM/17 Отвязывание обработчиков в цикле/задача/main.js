// Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
let p = document.querySelectorAll('p');

for(let elem of p){
  elem.addEventListener('click', funcAdd);
}

function funcAdd(){
  this.innerHTML += '!';
  this.removeEventListener('click', funcAdd);
}
