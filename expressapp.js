const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/about',(req,res)=>{
    res.send('This is About us !!!');
})

app.listen(port,()=>{
    console.log(`App litening at port ${port}`);
})

// Instead of using http we are using express sever as no need to handle request Types, statusCode etc.
//Built in handling