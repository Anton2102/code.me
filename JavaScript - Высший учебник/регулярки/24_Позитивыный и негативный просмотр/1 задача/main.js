// Дана строка, содержащая имена функций:
// let str = 'func1() func2() func3()';
// Получите массив имен функций из строки.
let str = 'func1() func2() func3()';
console.log(str.match(/func([0-9])\(\)/g));
