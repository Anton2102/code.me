// Дана строка:
// let str = '1 23 456 789';
// Найдите позицию первого числа, состоящего из трех цифр.
let str = '1 23 456 789';
console.log(str.search(/\d{3}/));
