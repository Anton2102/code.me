// Дана строка:
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие и большие латинские буквы, не затронув остальных.
let str = 'aAXa aeffa aGha aza ax23a a3sSa';
console.log(str.replace(/a[a-zA-Z]a/g, '!'));
