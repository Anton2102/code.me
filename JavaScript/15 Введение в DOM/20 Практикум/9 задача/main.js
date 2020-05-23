// Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
let input = document.querySelector('input');

input.addEventListener('blur', function(){
  let reverse = this.value.split('').reverse().join('');

  for(let i = 0; i < reverse.length; i++){
    if (this.value[i] != reverse[i]){
      console.log('Не читается!');
      break;
    }
  }
});
