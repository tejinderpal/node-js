const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//own middleware

// const customMiddleware = (req,res,next)=>{
//     console.log('_req',req);
//     // next denotes the next middleware we want to run
//     next();
// }

app.use(express.static(path.join(__dirname, "public")));

//To serve static files such as images, CSS files, and JavaScript files, 
//use the express.static built-in middleware function in Express.

// app.use(customMiddleware);

app.get('/',(req,res)=>{
    console.log('data from browser', req.query.name); // if send any query param from browser
    res.send('Hello World');
});

app.get('/contact/:name',(req,res)=>{
    res.send('This is contact us page of ' + req.params.name);
});
app.get('/profile',(req,res)=>{
    //We can send JSON response by using it
    res.json({name:'Tejinder',age:12});
});

app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
})