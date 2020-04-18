let date = 12345;
let editDate = String(date);
let result = 0;
for(let i = 0; i < editDate.length; i++){
  result += Number(editDate[i]);
}
alert(result);
