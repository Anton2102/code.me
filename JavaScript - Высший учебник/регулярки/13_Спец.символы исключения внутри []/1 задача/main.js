// Дана строка:
// let str = 'x[]z x{}z x.z x()z';
// Напишите регулярку, которая найдет все слова по шаблону: буква 'x', затем любое количество любых скобок, затем буква 'z'.
let str = 'x[]z x{}z x.z x()z';
console.log(str.replace(/x[\[\]\(\)\{\}]*z/g, '!'));
