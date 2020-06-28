// Дана строка:
// let str = '[abc] {abc} abc (abc) [abc]';
// Напишите регулярку, которая найдет строки в квадратных скобках и заменят их на '!'.
let str = '[abc] {abc} abc (abc) [abc]';
console.log(str.replace(/\[abc\]/g, '!'));
