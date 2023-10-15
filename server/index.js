const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use("/", (req, res) => {
  res.send("Server is running on port 8800");
});

app.listen(8800, console.log("Server is running on PORT 8800"));
