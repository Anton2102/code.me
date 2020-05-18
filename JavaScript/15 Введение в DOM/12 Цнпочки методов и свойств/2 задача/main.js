// Дан следующий код:
// <img id="image" src="avatar.png" width="300" height="500">
// console.log(document.querySelector('#image').src);
// console.log(document.querySelector('#image').width);
// console.log(document.querySelector('#image').height);
// Укажите на недостатки данного кода. Исправьте их.

let img = document.querySelector('#image');
console.log(img.src, img.width, img.height);
