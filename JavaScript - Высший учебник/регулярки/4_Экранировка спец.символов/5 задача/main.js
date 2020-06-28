// Дана строка:
// let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
// Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив остальные.
let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
console.log(str.replace(/\*q+\+/g, '!'));
