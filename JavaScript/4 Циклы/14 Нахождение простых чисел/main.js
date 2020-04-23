// Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите 'да', а если нет - выведите 'нет'.

let num = 31;
let flag = true;

for(let i = 2; i < num; i++){
  if(num % i == 0){
    flag = false;
  }
}

if(flag){
  console.log('Простое');
} else console.log('НЕТЪ');
