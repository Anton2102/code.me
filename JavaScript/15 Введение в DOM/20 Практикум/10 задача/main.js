// Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
let input = document.querySelector('input');

input.addEventListener('blur', function(){
  for(let i = 0; i < this.value.length; i++){
    if(this.value[i] == '3'){
      console.log('Значение содержит 3');
      break;
    }
  }
});
