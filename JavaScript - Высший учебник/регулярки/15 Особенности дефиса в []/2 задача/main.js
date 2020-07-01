// Дана строка:
// let str = 'xaz x$z x-z xcz x+z x%z x*z';
// Найдите все строки по следующему шаблону: буква 'x', затем или доллар, или дефис или плюс, потом буква 'z'.
let str = 'xaz x$z x-z xcz x+z x%z x*z';
console.log(str.replace(/x[$+-]z/g, '!'));
