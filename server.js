const express = require('express');
const app = express();
const fs = require('fs');

const web_files = express.static("public");

app.use(web_files);

app.get("/hello", function(req, res) {
   res.send("<h1>Hello, Express!</h1>");
});

app.post("/goodbye", function(req, res) {
   res.send("<h1>Goodbye, Express!</h1>");
   res.setHeader('Content-Type', 'text/css');
   res.end(fs.readFileSync('public/style.css'));
});

app.listen(3000, function() {
   console.log("Listening on port 3000...");
});
