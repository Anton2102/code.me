// Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.
let input = document.querySelector('#input');

input.addEventListener('focus', function(){
  input.value = 1;
})

input.addEventListener('blur', function(){
  input.value = 2;
});
