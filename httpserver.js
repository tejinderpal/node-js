const http = require('http');

const port = process.env.port || 3000;

// If port not setup in environment variable then it will pick 3000. This is port at which our node application listen.

const server = http.createServer((req,res)=>{
    console.log('req',req.url);
    //req object has lots of things, we use url property to know about current url of browser requested
    res.statusCode = 200;
    //we can set many headers, will set content-Type header to serve response as HTML.This header tell client to server response type
    res.setHeader('Content-Type','text/html');
    res.end('<h1>This is Tejinder!!!</h1><p>Hi Team</p>');
    
});

// createSever method takes callback having 2 arguments req, res.In res we can send response to browser

server.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})
//without listening server it will not run