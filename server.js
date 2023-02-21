const express = require("express");
const cors = require("cors");

//enable cors

//create express app with cors enabled and json body parser
const app = express();
app.use(cors());

//create a route
app.get("/", (req, res) => {
  res.send("Express sv test!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
