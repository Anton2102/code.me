// Пусть дан следующий код:
//
// <input id="elem" value="привет">
// let elem = document.querySelector('#elem');
//
// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }
//
// func(); // тут должно вывести 'привет, Иванов Иван'
// Добавьте в последнюю строчку метод apply так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.

let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func.apply(elem, ['Лешонков', 'Антон']); // тут должно вывести 'привет, Иванов Иван'
