const express = require("express");
const app = express();
app.use(express.json());

app.post("/validate", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  res.json({ success: true, name });
});

app.listen(6000, () => console.log("Validation API on 6000"));
