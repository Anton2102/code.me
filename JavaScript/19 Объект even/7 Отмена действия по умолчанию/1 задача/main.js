// Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.
let a = document.querySelectorAll('a');

for(let elem of a){
  elem.addEventListener('click', function(){
    console.log(1);
    event.preventDefault();
    this.innerHTML +=  ' ' + this.href;
  });
}
