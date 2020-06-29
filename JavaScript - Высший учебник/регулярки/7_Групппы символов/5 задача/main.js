// Дана строка:
// let str = 'ave a#b a2b a$b a4b a5b a-b acb';
// Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.
let str = 'ave a#b a2b a$b a4b a5b a-b acb';
console.log(str.replace(/a\wb/g, '!'));
