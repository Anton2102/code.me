// Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.
let select = document.querySelector('select');
let input = document.querySelector('input');

input.addEventListener('blur', function(){
  select.selectedIndex = this.value;
});
