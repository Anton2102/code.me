// Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.
let input = document.querySelector('#input');

input.addEventListener('focus', function(){
  this.value = 1;
});

input.addEventListener('blur', function(){
  this.value = 2;
});
