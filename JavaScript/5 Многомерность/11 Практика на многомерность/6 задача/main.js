// Дан такой массив с юзерами:
// let users = [
// 	{
// 		name: 'name1',
// 		active: true,
// 	},
// 	{
// 		name: 'name2',
// 		active: false,
// 	},
// 	{
// 		name: 'name3',
// 		active: true,
// 	},
// 	{
// 		name: 'name4',
// 		active: false,
// 	},
// 	{
// 		name: 'name5',
// 		active: true,
// 	},
// ];
// Сделайте две функции, которые будут менять значение поля active: первая функция пусть меняет на true, а вторая - на false.
// Пусть наши функции параметрами принимают данный массив и номер юзера, над которым следует произвести изменения.
// Пусть функции возвращают измененный массив.

let users = [
	{
		name: 'name1',
		active: true,
	},
	{
		name: 'name2',
		active: false,
	},
	{
		name: 'name3',
		active: true,
	},
	{
		name: 'name4',
		active: false,
	},
	{
		name: 'name5',
		active: true,
	},
];

function activeTrue(arr, num){
    arr[num]['active'] = true;
    return arr;
}

function activeFalse(arr, num){
    arr[num]['active'] = false;
    return arr;
}

activeTrue(users, 1);
activeFalse(users, 0);

console.log(users);
