const express = require('express');
const app = express();

const web_files = express.static("public");

app.use(web_files);

app.get("/hello", function(req, res) {
   res.send("<h1>Hello, Express!</h1>");
});

app.post("/goodbye", function(req, res) {
   res.send("
      <head><link rel=\"stylesheet\" href=\"/style.css\"></head>
      <body><h1>Goodbye, Express!</h1></body>
   ");
});

app.listen(3000, function() {
   console.log("Listening on port 3000...");
});
