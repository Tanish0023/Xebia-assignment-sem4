const fs = require('fs');
const { Transform } = require('stream');

const toUpperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream
  .pipe(toUpperCaseTransform)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('File transformed to uppercase and saved as output.txt');
  });
