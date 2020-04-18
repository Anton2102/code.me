// Дано число 12345. Найдите произведение цифр этого числа.
let date = 12345;
let editDate = String(date);
let result = 0;
for(let i = 0; i < editDate.length; i++){
  if(result == 0){
    result = Number(editDate[i]);
  } else {
    result *= Number(editDate[i]);
  }
}

alert(result);
