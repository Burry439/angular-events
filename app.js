const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors');
const passport = require("passport");
const mongoose = require("mongoose");
const config = require('./config/database')


mongoose.connect(config.database)

mongoose.connection.on('connected', ()=>{
    console.log("connected to db " + config.database)
})

mongoose.connection.on('error', (err)=>{
    console.log("database error " + err)
})

const app = express()
app.use(cors())

const users = require('./routes/users')
const events = require('./routes/events')
const comments = require('./routes/comments')


const port = process.env.PORT || 8080;

///makes it that we can acses our routes from any domain
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

//body parser makes it that you can read incoming request

app.use(bodyParser.json())


//passport middleware
app.use(passport.initialize())

app.use(passport.session())

require('./config/passport')(passport)

app.use('/users', users)
app.use('/events',events)
app.use('/comments',comments)

//index route
app.get('/', (req, res) => {
    res.send('invaild endpoint');
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

app.listen(port, ()=>{
    console.log("server started on port" + port)
})