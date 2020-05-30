// Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.
let div = document.querySelector('div');

div.addEventListener('click', function(event){
  if(event.altKey){
    this.style.color = 'red';
  }
});
