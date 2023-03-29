var express = require('express');
var cors = require('cors');
require('dotenv').config()
const dns = require('dns');
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

//my code
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


app.post("/api/fileanalyse", upload.array("upfile"), uploadFiles);
function uploadFiles(req, res) {
    //console.log(req.body);
    console.log(req.files[0]);
    res.json({ 
      name: req.files[0].originalname,
      type: req.files[0].mimetype,
      size: req.files[0].size
    });
}
