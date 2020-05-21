// задача 5
// Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.

// задача 6
// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
let date = document.querySelector('#date');

date.addEventListener('blur', function(){
  let setDate = document.querySelectorAll('.setDate');
  let fio = this.value.split(' ');
  console.log(fio);

  for(let i = 0; i < setDate.length; i++){
    setDate[i].value = fio[i][0].toUpperCase() + fio[i].slice(1);
  }
});
