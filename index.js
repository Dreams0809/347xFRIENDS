const express = require('express')
const app = express()
const session = require('express-session')
const mongoose = require('mongoose')
const methodOverride = require("method-override")
const cors = require('cors')
const logger = require('morgan')
const mainRoutes = require("./routes/main");
require('dotenv').config({path: './config/.env'})



// General Middleware
app.use(cors())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/public', express.static('public'));
app.use(logger('dev'))



// Use forms for put / delete 
app.use(methodOverride("_method")); 


// Routes
app.use("/", mainRoutes)


// Server
    //Server Running
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on ${process.env.PORT}, you better catch it!`
      );
    });
