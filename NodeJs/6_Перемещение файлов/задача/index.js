// Дан файл test.txt. Переместите его в папку folder.
'use strict'
let fs = require('fs');

fs.rename('test.txt', 'folder/test.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});
