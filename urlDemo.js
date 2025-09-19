const url = require("url");

const address = "http://localhost:3000/default.htm?year=2025&month=September";
const parsed = url.parse(address, true);

console.log("Host:", parsed.host);
console.log("Pathname:", parsed.pathname);
console.log("Search:", parsed.search);
console.log("Query Params:", parsed.query);
