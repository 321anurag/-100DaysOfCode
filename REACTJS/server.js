var express = require('express');
const cors = require('cors')

var app = express();
app.use(cors())
var body = {
    "count": 21,
    "results": [
      { "id": 1, "firstName": "David", "lastName": "Wallace" },
      { "id": 2, "firstName": "Sonia", "lastName": "Ross" },
      { "id": 3, "firstName": "Anthony", "lastName": "Thomson" },
      { "id": 4, "firstName": "David", "lastName": "Wallace" },
      { "id": 5, "firstName": "Sonia", "lastName": "Ross" },
      { "id": 6, "firstName": "Anthony", "lastName": "Thomson" },
      { "id": 7, "firstName": "David", "lastName": "Wallace" },
      { "id": 8, "firstName": "Sonia", "lastName": "Ross" },
      { "id": 9, "firstName": "Anthony", "lastName": "Thomson" },
      { "id": 10, "firstName": "David", "lastName": "Wallace" },
      { "id": 11, "firstName": "Sonia", "lastName": "Ross" },
      { "id": 12, "firstName": "Anthony", "lastName": "Thomson" },
      { "id": 13, "firstName": "David", "lastName": "Wallace" },
      { "id": 14, "firstName": "Sonia", "lastName": "Ross" },
      { "id": 15, "firstName": "Anthony", "lastName": "Thomson" },
      { "id": 16, "firstName": "David", "lastName": "Wallace" },
      { "id": 16, "firstName": "Sonia", "lastName": "Ross" },
      { "id": 18, "firstName": "Anthony", "lastName": "Thomson" },
      { "id": 19, "firstName": "David", "lastName": "Wallace" },
      { "id": 20, "firstName": "Sonia", "lastName": "Ross" },
      { "id": 21, "firstName": "Anthony", "lastName": "Thomson" }
    ]
  }

  var body1 = {
    "count": 21,
    "results": [,
      { "id": 11, "firstName": "Sonia", "lastName": "Ross" },
      { "id": 12, "firstName": "Anthony", "lastName": "Thomson" },
      { "id": 13, "firstName": "David", "lastName": "Wallace" },
      { "id": 14, "firstName": "Sonia", "lastName": "Ross" },
      { "id": 15, "firstName": "Anthony", "lastName": "Thomson" },
      { "id": 16, "firstName": "David", "lastName": "Wallace" },
      { "id": 16, "firstName": "Sonia", "lastName": "Ross" },
      { "id": 18, "firstName": "Anthony", "lastName": "Thomson" },
      { "id": 19, "firstName": "David", "lastName": "Wallace" },
      { "id": 20, "firstName": "Sonia", "lastName": "Ross" }
    ]
  }
  
app.get('/', function (req, res) {
   res.send(body)
})

app.get('/page=1', function (req, res) {
  res.send(body1)
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})