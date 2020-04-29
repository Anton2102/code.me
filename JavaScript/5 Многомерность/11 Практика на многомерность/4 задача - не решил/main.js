// Даны города и их страны следующей структуре:
// let data = [
// 	{
// 		country: 'Россия',
// 		city:    'Москва',
// 	},
// 	{
// 		country: 'Беларусь',
// 		city:    'Минск',
// 	},
// 	{
// 		country: 'Россия',
// 		city:    'Питер',
// 	},
// 	{
// 		country: 'Россия',
// 		city:    'Владивосток',
// 	},
// 	{
// 		country: 'Украина',
// 		city:    'Львов',
// 	},
// 	{
// 		country: 'Беларусь',
// 		city:    'Могилев',
// 	},
// 	{
// 		country: 'Украина',
// 		city:    'Киев',
// 	},
// ];
// Подсчитайте количество стран.
let result = [];
let data = [
	{
		country: 'Россия',
		city:    'Москва',
	},
	{
		country: 'Беларусь',
		city:    'Минск',
	},
	{
		country: 'Россия',
		city:    'Питер',
	},
	{
		country: 'Россия',
		city:    'Владивосток',
	},
	{
		country: 'Украина',
		city:    'Львов',
	},
	{
		country: 'Беларусь',
		city:    'Могилев',
	},
	{
		country: 'Украина',
		city:    'Киев',
	},
];


// надо думать, что делать с отбором
for(let elem of data){
  if(result == ''){
    result.push(elem['country']);
    // console.log(elem['country']);
  } else {
    for(let elem2 of result){
      if(elem2 !== elem['country']){
        result.push(elem['country']);
        break;
      }
    }
  }
}

console.log(result);
