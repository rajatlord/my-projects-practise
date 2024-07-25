const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "files", "stater.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);


console.log("Hello.........");

fs.writeFile(
    path.join(__dirname, "files", "reply.txt"),
    "nice meet you",
    (err) => {
      if (err) throw err;
      console.log("write complete");
      fs.appendFile(
        path.join(__dirname, "files", "reply.txt"),
        '\n\n Yes it is ',
        (err) => {
          if (err) throw err;
          console.log("append complete");
        }
      );

      fs.rename(
        path.join(__dirname, "files", "reply.txt"),
        (__dirname, "files", "newreply.txt"),
        (err) => {
          if (err) throw err;
          console.log("rename complete");
        }
      );

      
    }
  );

 

 