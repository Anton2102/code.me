// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
let input = document.querySelector('input');

input.addEventListener('blur', function(){
  let reverseDate = this.value.split('.').reverse().join('.');
  let date = new Date(reverseDate);
  let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  console.log(arr[date.getDay() - 1]);
});
