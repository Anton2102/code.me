// let str = 'wйw wяw wёw wqw';
// Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'w', а между ними - буква кириллицы.
let str = 'wйw wяw wёw wqw';
console.log(str.replace(/w[а-яё]w/g, '!'));
