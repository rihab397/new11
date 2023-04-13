//Create our express and socket.io servers
const express = require('express')
const app = express()
let path = require("path");
let p1 = process.env.PORT || 1370 || 2000 || 5000;
let p2 = 4000;
app.use(express.static('images'))
var port = p1;
app.set('view engine', 'ejs') 


app.get('/chat', function (req, res) {
  res.sendFile(path.join(__dirname + '/lobby.html'));
});
app.get('/startchat/:id', (req, res) => {
  console.log(req.params);
  res.render('main', { id: req.params.id })
})


app.listen(port, () => {
  console.log("server is running " + port)
}) // Run the server on the 3000 port