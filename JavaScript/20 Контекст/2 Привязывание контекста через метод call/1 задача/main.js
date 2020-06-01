// Дана функция:
//
// function func() {
// 	console.log(this.value);
// }
// Даны три инпута:
//
// <input id="elem1" value="text1">
// <input id="elem2" value="text2">
// <input id="elem2" value="text3">
// С помощью метода call и функции func выведите на экран value каждого из инпутов.

function func() {
	console.log(this.value);
}

func.call(document.querySelector('#elem1'));
func.call(document.querySelector('#elem2'));
func.call(document.querySelector('#elem3'));
