// Дана строка, содержащая домен:
// let str = 'sss domain.ru zzz';
// Найдите этот домен и положите его имя в первый карман, а зону - во второй.
let str = 'sss domain.ru zzz';
let res = str.match(/([a-zA-Z]+)\.([a-z]{2,})/);
console.log(res[0]);
console.log(res[1]);
console.log(res[2]);
