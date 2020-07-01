// Дан файл с текстом. Откройте его асинхронно, прочитайте текст и выведите его в консоль.
'use strict'

let fs = require('fs');

fs.readFile('text.txt', 'utf8', (err, data) => {
	console.log(data);
});