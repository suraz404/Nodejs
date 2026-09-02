//build and read file path

import path from "node:path";

// path.join   //uses the correct separator for the current os

// process.cws //gives current working directory //the folder where the nodejs was started

const projectRoot = process.cwd();
console.log(projectRoot);

//upload/users/43/profile-photo.png

const userId = "42";
const originalName = "profile-photo.png";

//imp-> path.join -> create a path string
//it will not create the folderr
//it doesnot check whether the file exist or not
const uploadFile = path.join(
  projectRoot,
  "uploads",
  "users",
  userId,
  originalName,
);
console.log(uploadFile);

//path.basename -> extract the last part of file //name
const fileName = path.basename(uploadFile);

const fileExt = path.extname(uploadFile); // .png

const parentFolder = path.dirname(uploadFile); //parent folder all
