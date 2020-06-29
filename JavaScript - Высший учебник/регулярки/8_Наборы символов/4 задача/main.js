// Дана строка:
// let str = 'aba aea afa aha aga';
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от j до z.
let str = 'aba aea afa aha aga';
console.log(str.replace(/a[a-fj-z]a/g, '!'));
