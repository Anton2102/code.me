// Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
let input = document.querySelector('input'),
    checkedTrue = document.querySelector('.checkedTrue'),
    checkedFalse = document.querySelector('.checkedFalse');

checkedTrue.addEventListener('click', function(){
  input.checked = true;
});

checkedFalse.addEventListener('click', function(){
  input.checked = false;
});
