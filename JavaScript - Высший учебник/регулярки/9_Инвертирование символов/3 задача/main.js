// Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ большая латинская буква от 1 и более раз, буква 'z'.
console.log('xASz xz xhjz'.replace(/x[^a-z]+z/g, '!'))
