// Преобразуйте строку 'var_test_text' в 'VarTestText'.
// Написанный код должен работать для любых строк такого типа (то есть для строк, в которых слова разделены символов подчеркивания).

let str = 'var_test_text';
let arr = str.split('_');
let result = [];

for(let elem of arr){
  result.push(elem.slice(0,1).toUpperCase() + elem.slice(1,));
}

let zd5 = result.join('');
console.log(zd5.slice(0,1).toLowerCase() + zd5.slice(1,));
