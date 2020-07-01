// Дана строка:
// let str = 'xaz xBz xcz x-z x@z';
// Найдите все строки по следующему шаблону: буква 'x', большая или маленькая буква или дефис, буква 'z'.
let str = 'xaz xBz xcz x-z x@z';
console.log(str.replace(/x[a-zA-Z-]z/g, '!'));
