// alert(window.location.pathname);

let links = document.querySelectorAll('nav a');

for (link of links){
   if(link.getAttribute('href') == window.location.pathname) {
     link.classList.add('active');
   }
}
