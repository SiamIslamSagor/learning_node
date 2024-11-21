const fs = require("fs");

// reading text asynchronously

fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) throw new Error(err);

  // written text asynchronously

  fs.writeFile("./texts/read-2.txt", data, "utf-8", err => {
    if (err) throw Error("error writing data");
  });
});

console.log("data writing...");
