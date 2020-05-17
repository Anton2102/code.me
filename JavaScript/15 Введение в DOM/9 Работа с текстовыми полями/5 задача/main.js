// Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let input1 = document.querySelector('#input1');
  let input2 = document.querySelector('#input2');

  let delVar = input1.value;
  input1.value = input2.value;
  input2.value = delVar;
});
