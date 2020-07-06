// Дана строка:
// let str = 'abc def xyz';
// Напишите регулярку, которая найдет последнюю подстроку из букв.
let str = 'abc def xyz';
console.log(str.replace(/[a-z]+$/g, '!'));
