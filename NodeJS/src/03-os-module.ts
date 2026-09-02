//os
//cpu information
//memory
//home/temp direc

import * as os from "node:os";
function runOsDemo(): void {
  console.log("platform", os.platform()); //darwin
  console.log("architecture", os.arch()); //archs
  console.log("os type", os.type());
  console.log("os release", os.release());
  console.log("home directory", os.homedir());
  console.log("temp dir ", os.tmpdir());

  const cpus = os.cpus();
  console.log(cpus.length);

  if (cpus.length > 0) {
    console.log("first CPU model", cpus[0].model, cpus[0].speed);
  }

  //memories
  console.log(os.totalmem(), os.freemem());
}
runOsDemo();

//cpu info
