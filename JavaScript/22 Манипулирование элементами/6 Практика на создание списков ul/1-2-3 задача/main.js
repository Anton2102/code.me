//1 задача // Дан массив. Выведите его элементы в виде списка ul так, чтобы каждый элемент попал в свою li.
//2 задача // Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.
//3 задача // Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.
let arr = [ 1, 2, 3, 4, 5];

let body = document.querySelector('body');
let ul = document.createElement('ul');

for(let elem of arr){
  let li = document.createElement('li');
  li.innerHTML = elem;

  li.addEventListener('click', function addSymbol(){
    this.innerHTML += '!';
    this.removeEventListener('click', addSymbol);
  });

  ul.appendChild(li);
}

body.appendChild(ul);
