// Дана строка:
// let str = 'aa aba abba abbba abca abea';
// Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba', не захватив 'abca' и 'abea'.
let str = 'aa aba abba abbba abca abea';
console.log(str.replace(/ab*a/g, '!'));
