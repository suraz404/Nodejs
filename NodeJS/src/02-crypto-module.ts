import crypto, { randomBytes } from "node:crypto";

//built in node js modules
//security related tasks
//createing random UUID(universally unique identfier) , Ids
//creating secure token
//hashing data
// to verify of the data change
//encrypt/decrypt

//cryptor.rando,UUID

//unique Id ,user id , order id , session id

const requestId = crypto.randomUUID();
// console.log(requestId);

//crypto.randomBytes

//password rest token
//email verification token
//session secret , api keys

const resetToken = randomBytes(16); //this will chnage to 32 characters hex (1 bytes = 2 hex character)

// console.log(resetToken);

//crypto.createHash

//hello -> hash
//hash -> hello is not not possible

//hashing is one way - can't reverse back to input
const text = "hello world";

const hash = crypto.createHash("sha256").update(text).digest("hex");

console.log(hash);

//crypto.createHmac

//similar to hash but it is secret key

//normal hash : data -> hash
//Hmac : data + secret -> signed hash

//use : webhook related
//signed token

const secretKey = " my-super-secret-key";
const message = "user_id=1";

const signature = crypto
  .createHmac("sha256", secretKey)
  .update(message)
  .digest("hex");

//verifying signature
const signatureVerifu = crypto
  .createHmac("sha256", secretKey)
  .update(message)
  .digest("hex");

console.log(signature === signatureVerifu);
