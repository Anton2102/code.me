//1 pзадача
// Дан следующий массив с работниками:
//
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// Выведите элементы этого массива в виде HTML таблицы.

// 2 задача // Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.
//3 задача // Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.
let result = document.querySelector('.result');
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

let table = document.createElement('table');

for(let user of employees){
  let tr = document.createElement('tr');

  let td1 = document.createElement('td');
  td1.innerHTML = user.name;
  tr.appendChild(td1);

  let td2 = document.createElement('td');
  td2.innerHTML = user.age;
  td2.addEventListener('click', () => {td2.innerHTML = Number(td2.innerHTML) + 1});
  tr.appendChild(td2);


  let td3 = document.createElement('td');
  td3.innerHTML = user.salary;
  td3.addEventListener('click', () => {td3.innerHTML = Number(td3.innerHTML) * 1.1});
  tr.appendChild(td3);

  table.appendChild(tr);
}
result.appendChild(table);
