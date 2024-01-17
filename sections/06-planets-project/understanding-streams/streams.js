// Write a simple program that uses stream api of nodejs to read from a file, then transform the data into uppercase and then write the transformed data into another file.

const fs = require("fs");
const { Transform } = require("stream");

// Read from the source
const readableStream = fs.createReadStream("./input.txt");

// Transform this stream
const transformToUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

// Write to a destination
const writabelSream = fs.createWriteStream("./output.txt");

// Pipe all streams
readableStream.pipe(transformToUpperCase).pipe(writabelSream);
