import process from "node:process";

//process env  values are always string or undefined
const port = Number(process.env.NODE_ENV) ?? "DEVELOPMENT";

//process.argv , first 2 array is already reserved by node js

const command = process.argv[2] ?? "start"; // vlaue input garna sakinchha

const shouldFail = process.argv.includes("--fails");
const shouldCrash = process.argv.includes("--crash");

process.on("exit", (code) => {
  console.log(`process is executed in code ${code}hi`);
});

process.cwd(); //-> current working directory
