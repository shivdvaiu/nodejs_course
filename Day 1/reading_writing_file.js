const fs = require("fs");

//  const textIn = fs.readFileSync('./shiv.txt','utf8');

const txt = "new text written by me";

fs.writeFile("./shiv.txt", txt, (error) => {
    if (error) {
        console.log(error);
    }

    console.log("File Written Successfully");
});

fs.readFile("./shiv.txt", "utf-8", (error, data) => {
    console.log(data);
});
