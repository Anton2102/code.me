// Дана строка '12345'. Найдите сумму цифр этой строки.
let str = '12345';
let result = 0;
for(let i = 0; i < str.length; i ++){
  result += Number(str[i]);
}
alert(result);
