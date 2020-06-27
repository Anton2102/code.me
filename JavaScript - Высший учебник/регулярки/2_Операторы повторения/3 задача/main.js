// Дана строка:
//
// let str = 'aa aba abba abbba abca abea';
// Напишите регулярку, которая найдет строки 'aa', 'aba' по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.
let str = 'aa aba abba abbba abca abea';
console.log(str.replace(/ab?a/g, '!'));
