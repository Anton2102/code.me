// Дан инпут:
//
// <input id="elem" value="text">
// Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута.
//
// После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст инпута, затем поредактируйте текст в инпуте и еще раз нажмите на кнопку. Убедитесь в том, что выведется новый текст инпута.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let inputText = document.querySelector('#inputText');
  console.log(inputText.value);
});
