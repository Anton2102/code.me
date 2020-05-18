// Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.
let input = document.querySelector('#input');

input.addEventListener('focus', function(){
  input.value = '';
});
