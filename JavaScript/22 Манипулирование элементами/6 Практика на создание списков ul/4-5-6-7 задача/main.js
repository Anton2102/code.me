//4 задача
// Дан ul:
// <ul id="elem"></ul>
// Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.

//5 задача // Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.
//6 задача // Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.
//7 задача // Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.
let ul = document.querySelector('#elem');
let arr = [1,2,3,4,5];

for(let elem of arr){
  let li = document.createElement('li');
  li.innerHTML = elem;

  li.addEventListener('click', function addSymbol(){
    alert(this.innerHTML);
    this.innerHTML += '!';

    this.removeEventListener('click', addSymbol);
  });


  ul.appendChild(li);
}
