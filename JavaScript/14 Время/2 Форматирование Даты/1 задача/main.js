// Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.
let date = new Date();

function zeroo(num){
  let length = String(num).split('');
  if(length.length <= 1){
    return '0' + num;
  } else {
    return num;
  }
}

console.log(zeroo(date.getHours()) + ':' + zeroo(date.getMinutes()) + ':' + zeroo(date.getSeconds()) + ' ' + zeroo(date.getDate()) + ':' + zeroo(date.getMonth()+1) + ':' + date.getFullYear());
