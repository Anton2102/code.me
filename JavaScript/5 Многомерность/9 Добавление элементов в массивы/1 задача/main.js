// Дан следующий массив с юзерами:
// let users = [
// 	{
// 		name: 'name1',
// 		surname: 'surname1',
// 		age: 30,
// 	},
// 	{
// 		name: 'name2',
// 		surname: 'surname2',
// 		age: 31,
// 	},
// 	{
// 		name: 'name2',
// 		surname: 'surname2',
// 		age: 32,
// 	},
// ];
// Добавьте в этот массив еще одного юзера.

let users = [
	{
		name: 'name1',
		surname: 'surname1',
		age: 30,
	},
	{
		name: 'name2',
		surname: 'surname2',
		age: 31,
	},
	{
		name: 'name2',
		surname: 'surname2',
		age: 32,
	},
];

users.push({
  name: 'name3',
  surname: 'surname3',
  age: 20
});


console.log(users);
