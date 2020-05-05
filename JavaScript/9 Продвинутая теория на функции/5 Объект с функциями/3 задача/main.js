// Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

let obj = {
  sum: function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },
  sumSquare: function(arr){
    let sum = 0;
    for(let elem of arr){
      sum += elem ** 2;
    }
    return sum;
  },
  sumCube: function(arr){
    let sum = 0;
    for(let elem of arr){
      sum += elem ** 3;
    }
    return sum;
  }
};

let arr = [1,2,3];

console.log(obj.sum(arr));
console.log(obj.sumSquare(arr));
console.log(obj.sumCube(arr));
