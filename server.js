const express = require('express');
const app = express();

const web_files = express.static("public");

app.use(web_files);

app.listen(3000, function() {
   console.log("Listening on port 3000...");
});