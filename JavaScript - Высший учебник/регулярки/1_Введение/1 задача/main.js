// Дана строка:
// let str = 'ahb acb aeb aeeb adcb axeb';
// Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.
let str = 'ahb acb aeb aeeb adcb axeb';
console.log(str.replace(/a.b/g, '!'));
