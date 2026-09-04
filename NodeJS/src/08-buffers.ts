//

//buffers - a raw binary data
//binary data means - when u have ur data stored in bytes

//reading files
//receiveing http req bodies
//working with streams
//handling images , pdf files,videos
//encrypt and hashing

//string = human readable text
//buffer = raw bytes

const textBuffer = Buffer.from("Node"); //N-4e o-6f d-64 e-65
console.log(textBuffer);

console.log(textBuffer.toString("utf-8"));

const engBuffer = Buffer.from("Hello");
console.log(engBuffer.length); // 5 character = 5 bytes

//allocation
const fixedBuffer = Buffer.alloc(5);
console.log("empty fixed", fixedBuffer); //< 00 00 00 00 00>

//add text
fixedBuffer.write("API");

console.log("ficed Buffer after write", fixedBuffer);
console.log("fixed buffer to text", fixedBuffer.toString());

//chunks if data is huge

const chunks = [Buffer.from("Hello"), Buffer.from("Node"), Buffer.from("js")];
const combineBuffer = Buffer.concat(chunks);
console.log(combineBuffer, combineBuffer.toString("utf-8"));
