// Даны два числа. Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа.
//
// Некий программист уже написал решение задачи, вот оно:
//
// let num1 = 234;
// let num2 = 531;
//
// let digits1 = String(num1).split('');
// let digitsSum1 = 0;
// for (let digit1 of digits1) {
// 	digitsSum1 += Number(digit1);
// }
//
// let digits2 = String(num1).split('');
// let digitsSum2 = 0;
// for (let digit2 of digits2) {
// 	digitsSum2 += Number(digit2);
// }
//
// if (digitsSum1 == digitsSum2) {
// 	alert('суммы цифр совпадают');
// } else {
// 	alert('суммы цифр не совпадают');
// }
// В чем недостатки приведенного кода? Переделайте код так, чтобы он был более удачным.

function checkTwoNumbers(num1,num2){
  if(sumNumber(num1) == sumNumber(num2)){
    return('Сумма циафр совпадают');
  } else return('Сумма цифр не совподает');
}

function sumNumber(num){
  let sum = 0;
  let arr = String(num).split('');
  for(let elem of arr){
    sum += elem;
  }

  return sum;
}

console.log(checkTwoNumbers(234,531));
