// Дан файл file.txt. Удалите его.
const fs = require('fs');
fs.unlink('file.txt', (err) => {
  if (err) throw err;
  console.log('completed!');
})
