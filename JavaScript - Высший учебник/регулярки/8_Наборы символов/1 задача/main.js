// Дана строка:
// let str = 'aba aea aca aza axa';
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква 'b', 'e' или 'x'.
let str = 'aba aea aca aza axa';
console.log(str.replace(/a[bex]a/g, '!'));
