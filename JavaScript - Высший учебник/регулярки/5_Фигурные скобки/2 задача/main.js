// Дана строка:
// let str = 'aa aba abba abbba abbbba abbbbba';
// Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается менее 3-х раз (включительно).
let str = 'aa aba abba abbba abbbba abbbbba';
console.log(str.replace(/ab{1,3}a/g, '!'));
