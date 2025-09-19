const express = require("express");
const app = express();
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.send("GET Request - Hello World");
});

app.post("/api/data", (req, res) => {
  res.json({ message: "POST Request Received", data: req.body });
});

app.listen(4000, () => console.log("REST API running on port 4000"));
