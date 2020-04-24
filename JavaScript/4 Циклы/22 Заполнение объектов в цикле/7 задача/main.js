// Самостоятельно, не подсматривая в мой код, выполните переворот какого-нибудь объекта.
let obj = {1:'a',2:'b',3:'c'};
let result = {};

for(let key in obj){
  result[obj[key]] = key;
}

console.log(result);
