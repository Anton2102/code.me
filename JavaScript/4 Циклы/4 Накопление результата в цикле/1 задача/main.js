// Найдите произведение целых чисел от 1 до 20.
let result;
for(let i = 1; i <= 20; i++){
  if(result == undefined){
    result = i;
  } else result*=i;
}
console.log(result);
