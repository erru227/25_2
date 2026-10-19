const express = require('express');
const app = express();

app.get("/", function(req, res) {
   res.send("<h1>Express Routes</h1>");
});

//Note- to show it, enter url: https://two5-2.onrender.com/hello
app.get("/hello", function(req, res) {
   res.send("<h1>Hello, Express!</h1>");
});

app.post("/goodbye", function(req, res) {
   res.send("<h1>Goodbye, Express!</h1>");
});

app.listen(3000, function() {
   console.log("Listening on port 3000...");
});