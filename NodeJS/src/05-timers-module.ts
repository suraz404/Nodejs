//after some delay
// repaeatedly after some internal - 2 seconds

//settimeout
//setinterval
//cleartimeout
//setimmediate

function runSetTimeOutExample(): void {
  console.log("1.setTimeout example started");
  setTimeout(() => {
    console.log("2 this runs after 2 second");
  }, 2000);
  console.log("3 this is run ");
}
console.log("Server starting...");

const timeout = setTimeout(() => {
  console.log("Request timed out");
}, 5000);

const interval = setInterval(() => {
  console.log("Server is alive");
}, 2000);

setImmediate(() => {
  console.log("Server initialization complete");
});

// Later, when request succeeds:
clearTimeout(timeout);

// When shutting down:
clearInterval(interval);

import { error } from "node:console";
import { setTimeout as sleep } from "node:timers/promises";

async function runPromiseTimeExampel2(): Promise<void> {
  console.log("waiting for promise timer");
  await sleep(5500);
  console.log("after promises");
}
runPromiseTimeExampel2().catch((error: unknown) => {
  console.log(error);
});
