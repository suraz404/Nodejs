//piece by piece
//not loading the data everything at once
//read large files
//upload files
//downloading files
//video/audio processing
//compression

import { Readable, Transform, Writable } from "node:stream";
import { pipeline } from "node:stream/promises";

//CHUNKS

//here is my full 500 mb
//here is chunk 1
//here is chunk 2 , 3 , 4 5

//adv
//memory efficient

//streams types
//readable stream - source of data
//writable stream - destination where the data is written
//transform stream - read th edata , if needed change it , and pass that forward

const readableStream = Readable.from(["hello", "node js,", "streams"]);

const upperCaseTransfrom = new Transform({
  transform(chunk, encoding, callback) {
    const text = chunk.toString();
    callback(null, text.toUpperCase());
  },
});

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log("chunks recieved", chunk.toString());
    callback(); //i already handle the chunk move to next chunks
  },
});

//pipeline will connect all the streamreadable write transfrom

async function main(): Promise<void> {
  try {
    await pipeline(readableStream, upperCaseTransfrom, writableStream);

    console.log("string completed");
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "unknown error while streaming";

    console.log(msg);
  }
}
main();

//don't use streams everywhere
//use it when the data is huge
