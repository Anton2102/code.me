// Дана строка с тегом:
// let str = '<a href="" class="eee" id="zzz">';
// Получите массив имен атрибутов этого тега.
let str = '<a href="" class="eee" id="zzz">';
console.log(str.match(/[a-z]+\=\"[a-z]*\"/g));
