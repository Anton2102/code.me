// 1 задача // Дан textarea. Пусть в него вводится текст. Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.
// 2 задача // Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов.
// 3 задача // Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов за вычетом пробелов.
let textarea = document.querySelector('textarea');
let result = document.querySelector('.result');

textarea.addEventListener('blur', function(){
  let words = this.value.split(' ').length + ' слов!';
  // let chart = this.value.split('').length + ' символов!';
  let chart = 0;
  for(let i = 0; i < this.value.length; i++){
    if(this.value[i] != ' '){
      chart++;
    }
  }
  result.innerHTML = words + '<br>' + chart;
});
