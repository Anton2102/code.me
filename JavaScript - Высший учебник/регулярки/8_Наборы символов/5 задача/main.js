// Дана строка:
// let str = 'aAa aea aEa aJa a3a';
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от A до D.
let str = 'aAa aea aEa aJa a3a';
console.log(str.replace(/a[a-fA-D]a/g, '!'));
