// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let mounth = 10;
if(mounth ==12 || mounth > 0 && mounth <= 2){
  console.log('Зима');
} else if(mounth > 2 && mounth <= 5){
  console.log('Весна');
} else if(mounth > 5 && mounth <= 8){
  console.log('Лето');
} else if(mounth > 8 && mounth < 12){
  console.log('Осень');
}
