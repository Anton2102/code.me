// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
let arr = [1,2,3,4,5,6];
let result = arr.every((elem, index) => elem * index < 30);
console.log(result);
