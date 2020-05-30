// Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора, подобно тому, как это сделано в следующем образце:
let elem = document.querySelector('.elem');


document.addEventListener('mousemove', function(event){
  elem.innerHTML = event.clientX + ' : ' + event.clientY;
});
