// Определите, является ли текущий день недели выходным или рабочим днем.

function checkWeekends(num){
  if(num == 0 || num == 6){
    return 'Сегодня выходной';
  } else {
    return 'Сегодня рабочий день!';
  }
}

console.log(checkWeekends(new Date().getDay()));
