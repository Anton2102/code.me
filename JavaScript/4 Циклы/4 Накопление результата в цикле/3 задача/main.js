// Найдите сумму нечетных чисел от 1 до 99.
let summ = 0;
for(let i = 1; i <= 99; i++){
    if(i % 2 != 0){
      summ += i;
    }
}
console.log(summ);
