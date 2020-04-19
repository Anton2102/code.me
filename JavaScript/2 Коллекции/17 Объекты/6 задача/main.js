// Создайте объект user с ключами name (имя), surname (фамилия), patronymic (отчество) и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.
let user = {
  name: 'Anton',
  surname: 'Leshonkov',
  patronymic: 'Aleksandrovich',
  age: 19
};

console.log(user['name'] + ' ' + user.surname + ' ' + user['patronymic'] + ' ' + user.age);
