// Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.
let arr = [1,2,3];
let summ = 0;

 for(let i = 0; i < arr.length; i++){
   summ += arr[i];
 }

 alert('Сумма: ' + summ);
