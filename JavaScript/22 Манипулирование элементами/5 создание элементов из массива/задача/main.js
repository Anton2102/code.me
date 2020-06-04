let parent = document.querySelector('#parent');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	let p = document.createElement('p');
	p.innerHTML = elem;

  p.addEventListener('click', function(){
    this.innerHTML = Number(this.innerHTML) + 1;
  });

	parent.appendChild(p);
}
