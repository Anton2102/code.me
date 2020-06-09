// Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.
let aInput = document.querySelector('.a');
let bInput = document.querySelector('.b');
let cInput = document.querySelector('.c');

let button = document.querySelector('button');
let result = document.querySelector('.result');

button.addEventListener('click', function(){
  let a = Number(aInput.value);
  let b = Number(bInput.value);
  let c = Number(cInput.value);
  console.log(a, b, c);

  let dis = b ** 2 - 4 * a * c;
  console.log(dis);

  if(dis > 0){
    let x1 = -b - Math.sqrt(dis)/2 * a;
    let x2 = -b + Math.sqrt(dis)/2 * a;
    result.innerHTML = 'x1 = ' + x1 + '<br> x2 = ' + x2;
  } else if(dis == 0){
    let x1_2 = -b/2 * a;
    result.innerHTML = 'x1-x2 = ' + x1_2;
  } else {
    result.innerHTML = 'Корней нет!';
  }
});
