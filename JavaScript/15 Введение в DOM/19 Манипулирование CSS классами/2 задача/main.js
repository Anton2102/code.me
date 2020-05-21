// Дан элемент:
// <p id="elem" class="www ggg zzz"></p>
// Переберите в цикле его классы.
let list = document.querySelector('#elem').classList;

for(let elem of list){
  console.log(elem);
}
