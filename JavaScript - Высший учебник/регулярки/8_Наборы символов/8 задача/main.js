// Дана строка:
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы и цифры, не затронув остальных.
let str = 'aAXa aeffa aGha aza ax23a a3sSa';
console.log(str.replace(/a[a-z0-9]a/g, '!'));
