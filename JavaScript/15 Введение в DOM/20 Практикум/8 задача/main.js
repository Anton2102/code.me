// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
let input = document.querySelector('input');

input.addEventListener('blur', function(){
  this.value = this.value.split('.').join('-');
});
