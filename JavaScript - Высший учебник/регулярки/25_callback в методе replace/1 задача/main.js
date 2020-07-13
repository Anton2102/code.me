// let str = 'aaa [2] bbb [3] ccc [12] ddd';
// Найдите числа, стоящие в скобках и увеличьте их в два раза. То есть из нашей строки должна получится следующая:
// 'aaa [6] bbb [9] ccc [24] ddd'
let str = 'aaa [2] bbb [3] ccc [12] ddd';
console.log(str.replace(/\[(\d+)\]/g, (num, $1) => {

  return $1 * 2;
}));
