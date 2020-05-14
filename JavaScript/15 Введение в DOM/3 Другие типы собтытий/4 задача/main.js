// Дана кнопка. По клику на нее выведите число 1, а по двойному клику - число 2.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  console.log(1);
});

button.addEventListener('dbclick', function(){
  console.log(2);
});
