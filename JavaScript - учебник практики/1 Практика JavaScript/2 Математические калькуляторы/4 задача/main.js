// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.
let oneInput = document.querySelector('.oneInput');
let twoInput = document.querySelector('.twoInput');
let button = document.querySelector('button');
let result = document.querySelector('.result');
console.log(oneInput);

button.addEventListener('click', function(){
  let delOne = Number(oneInput.value);
  let delTwo = Number(twoInput.value);

  if(delOne >= delTwo){
    result.innerHTML = check(delOne, delTwo);
  } else {
    result.innerHTML = check(delTwo, delOne);
  }
});

function check(max, min){
  let arr = [];

  for(let i = 0; i < min; i++){
    if(max % i == 0 && min % i == 0){
      arr.push(i);
    }
  }
  return arr;
}
