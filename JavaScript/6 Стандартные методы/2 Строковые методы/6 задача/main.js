// Дана строка. Проверьте, есть ли в этой строке символ 'a'.
let str = 'abc';

function check(str, symbol){
  let elem = str.indexOf(symbol);
  if(elem === -1){
    return 'Нету!';
  } else {
    return 'Есть!';
  }
}

console.log(check(str, 'd'));
