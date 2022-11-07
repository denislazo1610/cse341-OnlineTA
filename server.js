const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");
const port = process.env.PORT || 3000;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
