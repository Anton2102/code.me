// Найдите сумму четных чисел от 2 до 100.
let summ = 0;
for(let i = 2; i <= 100; i++){
  if(i % 2 == 0){
    summ += i;
  }
}
console.log(summ);
