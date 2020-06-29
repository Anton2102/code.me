// Дана строка:
// let str = 'avb a1b a2b a3b a4b a5b abb acb';
// Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.
let str = 'avb a1b a2b a3b a4b a5b abb acb';
console.log(str.replace(/a\Db/g, '!'));
