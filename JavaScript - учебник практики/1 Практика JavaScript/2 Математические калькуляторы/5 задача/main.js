// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.
let oneInput = document.querySelector('.oneInput');
let twoInput = document.querySelector('.twoInput');
let button = document.querySelector('button');
let result = document.querySelector('.result');

button.addEventListener('click', function(){
  let num1 = Number(oneInput.value);
  let num2 = Number(twoInput.value);

  if(num1 >= num2){
    result.innerHTML = calk(num1, num2);
  } else {
    result.innerHTML = calk(num2, num1);
  }
});

function calk(max, min){
  for(let i = min; i > 0; i--){
    if(max % i == 0 && min % i == 0){
      return i;
    }
  }
}
