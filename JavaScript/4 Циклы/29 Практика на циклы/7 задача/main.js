// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
let arr = [1,2,3,4,5,6,7];
for(let elem of arr){
  if(elem === 5){
    console.log('Есть!');
    break;
  }
}
