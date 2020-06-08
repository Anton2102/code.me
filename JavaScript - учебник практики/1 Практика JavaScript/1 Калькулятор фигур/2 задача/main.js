// Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.
let sideOne = document.querySelector('.sideOne');
let sideTwo = document.querySelector('.sideTwo');
let p = document.querySelector('.result .p');
let s = document.querySelector('.result .s');

sideOne.addEventListener('input', inputResult);
sideTwo.addEventListener('input', inputResult);

function inputResult(){
  if(check(sideOne.value, sideTwo.value)){
    p.innerHTML = 'Периметр = ' + (Number(sideOne.value) * 2 + Number(sideTwo.value) * 2);
    s.innerHTML = 'Площадь = ' + Number(sideOne.value) * Number(sideTwo.value);
  }
}

function check(one, two){
  return one != '' && two != '';
}
