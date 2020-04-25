// Дан следующий объект:
//
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// Найдите сумму ключей этого объекта и поделите ее на сумму значений.

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

let summKey = 0, summValue = 0;

for(let key in obj){
  summKey += Number(key);
  summValue += obj[key];
}

console.log(summKey/summValue);
