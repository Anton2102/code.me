// Дана строка:
// let str = 'a aa aaa aaaa aaaaa';
// Найдите все подстроки, в которых есть две и более одинаковые буквы подряд.
let str = 'a aa aaa aaaa aaaaa';
console.log(str.replace(/([a-z])\1{1,}/g, '!'));
