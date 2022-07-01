const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:3500"
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to todo application." });
});
const sequelize = require('./db.config');
const taskrouter = require('./routes/task.routes');
app.use('/api/task', taskrouter)
// app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send("Buiding a doto app")
// }) 

app.listen(3500, () => {
  console.log("server start listening on PORT:3500")
})