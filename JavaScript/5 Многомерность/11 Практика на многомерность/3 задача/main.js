// Дан такой массив с юзерами:
// let users = [
// 	{
// 		name: 'name1',
// 		age: 31,
// 		active: true,
// 	},
// 	{
// 		name: 'name2',
// 		age: 32,
// 		active: false,
// 	},
// 	{
// 		name: 'name3',
// 		age: 33,
// 		active: true,
// 	},
// 	{
// 		name: 'name4',
// 		age: 34,
// 		active: false,
// 	},
// 	{
// 		name: 'name5',
// 		age: 35,
// 		active: true,
// 	},
// ];
// Выведите на экран тех юзеров, значение ключа active для которых равно true.

let users = [
	{
		name: 'name1',
		age: 31,
		active: true,
	},
	{
		name: 'name2',
		age: 32,
		active: false,
	},
	{
		name: 'name3',
		age: 33,
		active: true,
	},
	{
		name: 'name4',
		age: 34,
		active: false,
	},
	{
		name: 'name5',
		age: 35,
		active: true,
	},
];
for(let elem of users){
  for(let key in elem){
    if(elem[key] === true){
      console.log(elem['name']);
    }
  }
}
