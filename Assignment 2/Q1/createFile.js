const fs = require('fs');

const fileName = 'hello.txt';
const content = 'Hello, World!';

fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File created and content written successfully!');
  }
});
