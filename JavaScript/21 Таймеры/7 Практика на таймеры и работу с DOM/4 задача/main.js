// Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.
let input = document.querySelector('input');
let p = document.querySelector('p');

input.addEventListener('blur', function(){
  p.innerHTML = this.value;

  let timer = setInterval(function(){
    if(Number(p.innerHTML > 0)){
      p.innerHTML = Number(p.innerHTML) - 1;
    } else{
      clearInterval(timer);
    }
  }, 1000);
});
