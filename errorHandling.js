const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error("Something went wrong!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

app.listen(7000, () => console.log("Error handling API on 7000"));
