// Дана строка:
// let str = 'aa aba abba abbba abbbba abbbbba';
// Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается более 4-х раз (включительно).
let str = 'aa aba abba abbba abbbba abbbbba';
console.log(str.replace(/ab{4,}a/g, '!'));
