// Дана строка:
// let str = 'aa aba abba abbba abca abea';
// Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'.
let str = 'aa aba abba abbba abca abea';
console.log(str.replace(/ab*a/g, '!'));
