// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.

function reverseStr(str){
  return str.split('').reverse().join('');
}

console.log(reverseStr('Антон'));
