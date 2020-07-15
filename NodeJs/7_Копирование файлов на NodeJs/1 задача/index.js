// Дан файл test.txt. Скопируйте его в файл test.txt.
const fs = require('fs');

fs.copyFile('text.txt', 'folder/text.txt', (err) => {
  if (err) throw err;
  console.log('ok!');
});
