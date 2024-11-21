const fs = require("fs");

// reading a file text
const readText = fs.readFileSync("./texts/read.txt", "utf-8");

const writtenText = fs.writeFileSync(
  "./texts/write.txt",
  readText + "THIS IS MY WRITTEN TEXT"
);

console.log(writtenText);
