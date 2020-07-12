// Дана строка:
// let str = 'aaa bbb ccc xyz';
// Найдите все подстроки, в которых есть три одинаковые буквы подряд.
let str = 'aaa bbb ccc xyz';
console.log(str.replace(/([a-z])\1{2}/g, '!'));
