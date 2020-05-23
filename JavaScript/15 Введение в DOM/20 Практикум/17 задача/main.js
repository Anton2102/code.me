// Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
let p = document.querySelectorAll('p');

for(let elem of p){
  elem.addEventListener('click', function(){
    let input = document.querySelector('.result');
    input.value = Number(input.value) + 1;
  });
}
