//file systems
//uses
//create folders
//write filess
//read files
//check file information

import fs, { stat } from "node:fs";
import path from "node:path";
import * as fsPromises from "node:fs/promises";

//sync apis : fs.readfilesync
// callback apis
//promise apis
type FileSystem = {
  style: string;
  fileName: string;
  content: string;
  sizeInBytes: number;
};
const DEMO_FOLDER_PATH = path.join(process.cwd(), "file-system", "fs-demo");
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, "sync-note.txt");
const CALLBACK_FILE_PATH = path.join(DEMO_FOLDER_PATH, "callback-note.txt");
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH, "promise-note.txt");

function runSyncFileExample(): FileSystem {
  fs.writeFileSync(SYNC_FILE_PATH, "Content is create", "utf-8");

  fs.appendFileSync(SYNC_FILE_PATH, "Content is changed", "utf-8");

  const content = fs.readFileSync(SYNC_FILE_PATH, "utf-8");

  const stats = fs.statSync(SYNC_FILE_PATH);

  return {
    style: "sync",
    fileName: path.basename(SYNC_FILE_PATH),
    content,
    sizeInBytes: stats.size,
  };
}
async function runPromiseExample(): Promise<FileSystem> {
  await fsPromises.writeFile(PROMISE_FILE_PATH, "Content is created", "utf-8");

  await fsPromises.appendFile(
    PROMISE_FILE_PATH,
    " Content is changed",
    "utf-8",
  );

  const content = await fsPromises.readFile(PROMISE_FILE_PATH, "utf-8");

  const stats = await fsPromises.stat(PROMISE_FILE_PATH);

  return {
    style: "promise",
    fileName: path.basename(PROMISE_FILE_PATH),
    content,
    sizeInBytes: stats.size,
  };
}

function ensureDemoFolderExists(): void {
  if (!fs.existsSync(DEMO_FOLDER_PATH)) {
    fs.mkdirSync(DEMO_FOLDER_PATH, { recursive: true });
    console.log("Folder created");
  }
}
function runCallbackFileExample(): void {
  fs.writeFile(CALLBACK_FILE_PATH, "Content is created", "utf-8", (error) => {
    if (error) {
      console.log(error);
      return;
    }

    console.log("1. File created");

    fs.appendFile(
      CALLBACK_FILE_PATH,
      " Content is changed",
      "utf-8",
      (error) => {
        if (error) {
          console.log(error);
          return;
        }

        console.log("2. Content appended");

        fs.readFile(CALLBACK_FILE_PATH, "utf-8", (error, content) => {
          if (error) {
            console.log(error);
            return;
          }

          console.log("3. File read");

          fs.stat(CALLBACK_FILE_PATH, (error, stats) => {
            if (error) {
              console.log(error);
              return;
            }

            const result: FileSystem = {
              style: "callback",
              fileName: path.basename(CALLBACK_FILE_PATH),
              content,
              sizeInBytes: stats.size,
            };

            console.log("4. File information received");

            console.log(result);
          });
        });
      },
    );
  });
}

async function main(): Promise<void> {
  try {
    //we should check the DEMO_Folder existence
    ensureDemoFolderExists();
    const syncFolders = runSyncFileExample();
    const callbackSync = runCallbackFileExample();
    const promises = runPromiseExample();
    console.log([syncFolders, callbackSync]);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.log(message);
  }
}
main();
