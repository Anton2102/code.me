// Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.
let select = document.querySelector('select');
let date = new Date();
select.selectedIndex = date.getDay() - 1;
