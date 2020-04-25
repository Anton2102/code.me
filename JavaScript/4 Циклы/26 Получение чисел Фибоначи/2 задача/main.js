// Решите задачу на нахождение ряда чисел, каждое из которых равно сумме трех предыдущих, а первые три числа равны 0, 1 и 2.
let one = 0, two = 1, three = 2;

for(let i = 0; i < 10; i++){
  let current = one + two + three;

  one = two;
  two = three;
  three = current;

  console.log(current);
}
