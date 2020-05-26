// Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.
let select = document.querySelector('select');
let arrDate = [2022, 2028]; //допустим это весокосные года

select.addEventListener('change', function(){
  let result = arrDate.some(elem => elem == this.value);
  if(result){
    console.log('Это високосный год!');
  } else console.log('НОУУУ!');
});
