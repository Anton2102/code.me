// Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
let num = 100;
let resultSumm = 0;
for(let i = 1;;i++){
  resultSumm += i;
  if(resultSumm > num){
    console.log('Потребуется ' + i + ' чисел.');
    break;
  }
}
