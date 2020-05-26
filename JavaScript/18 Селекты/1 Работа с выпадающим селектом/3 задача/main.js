// Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.
let select = document.querySelector('select');

select.addEventListener('change', function(){
  if(this.value >= 0 && this.value <= 5){
    console.log('Это рабочий день!');
  } else if(this.value <= 7){
    console.log('Это выходной!');
  }
});
