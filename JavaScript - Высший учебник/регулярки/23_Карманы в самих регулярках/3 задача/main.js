// Дана строка:
// let str = 'aaa aaa bbb bbb ccc ddd';
// Найдите все подстроки, в которых есть два одинаковых слова подряд.
let str = 'aaa aaa bbb bbb ccc ddd';
console.log(str.replace(/([a-z]+) \1/g, '!'));
