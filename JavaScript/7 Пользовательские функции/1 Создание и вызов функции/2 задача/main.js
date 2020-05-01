// Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.
function summNumber(){
  let summ = 0;
  for(let i = 1; i <= 100; i++){
    summ += i;
  }

  return summ;
}

console.log(summNumber());
