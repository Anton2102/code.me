// Дана строка:
// let str = 'site.ru sss site.com zzz site.net';
// Получите массив доменных имен из этой строки.
let str = 'site.ru sss site.com zzz site.net';
console.log(str.match(/[a-zA-Z]+\.[a-z]{2,}/g));
