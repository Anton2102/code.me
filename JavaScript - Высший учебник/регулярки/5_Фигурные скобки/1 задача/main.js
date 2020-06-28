// Дана строка:
// let str = 'aa aba abba abbba abbbba abbbbba';
// Напишите регулярку, которая найдет строки 'abba', 'abbba', 'abbbba' и только их.
let str = 'aa aba abba abbba abbbba abbbbba';
console.log(str.replace(/ab{2,4}a/g, '!'));
