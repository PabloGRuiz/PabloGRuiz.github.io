const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const mainRouter = require('./src/routes/main');
app.use('/', mainRouter);

app.listen(3000,()=>{
    console.log("Server run in http://localhost:3000/")
})