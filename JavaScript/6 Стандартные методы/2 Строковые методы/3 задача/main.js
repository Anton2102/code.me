// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
let str = 'я учу javaScript';
console.log(str.substr(2, 3), str.substr(6,11));
console.log(str.substring(2,5), str.substring(6,16));
console.log(str.slice(2,5), str.slice(6,16));
