const fs = require("fs");

// Write
fs.writeFileSync("demo.txt", "Hello, this is written into a file!");

// Read
const data = fs.readFileSync("demo.txt", "utf-8");
console.log("File Content:", data);
