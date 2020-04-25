// Разберите мое решение описанной задачи, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.

let one = 0, two = 1;

for(let i = 0; i < 10; i++){
  let current = one + two;

  one = two;
  two = current;

  console.log(current);
}
