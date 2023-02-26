const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const port = 3000;

const app = express();

app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname,'static')));

app.use('/',require(path.join(__dirname,'routes/blog.js')))

app.listen(port,()=>{
    console.log(`App is running at port ${port}`)
});


