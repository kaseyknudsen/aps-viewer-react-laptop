const express = require("express");
const { PORT } = require("./config.js");

const app = express();

app.use(express.static("client"));
app.use(require("./routes/auth.js"));
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
