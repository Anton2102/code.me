// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
let arr = [-2,0,3,5,7,10,12,124];
for(let elem of arr){
  if(elem > 0 && elem < 10){
    console.log(elem);
  }
}
