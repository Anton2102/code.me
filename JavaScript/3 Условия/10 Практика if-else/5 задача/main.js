// Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let num = 123123;
let str = String(num);
if(Number(str[0]) + Number(str[1]) + Number(str[2]) === Number(str[3]) + Number(str[4]) + Number(str[5])){
  console.log('Да');
} else console.log('Нет!');
