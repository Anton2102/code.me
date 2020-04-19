// Дано число 12345. Переставьте цифры этого числа в обратном порядке.
let date = 12345;
let editDate = String(date);
let result = '';

for(let i = editDate.length; i > 0; i--){
  result += editDate[i-1];
}

alert(result);
