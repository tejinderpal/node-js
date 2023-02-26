const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    const url = req.url;
    res.setHeader('Content-Type','text/html');
    switch(url){
        case '/':{
            res.statusCode = 200;
            res.end('<h1>This is Homepage</h1>');
            break;
        }
        case '/about':{
            res.statusCode = 200;
            res.end('<h1>This is About</h1>');
            break;
        }
        case '/details':{
            res.statusCode = 200;
            const data = fs.readFileSync('websiteContent.html')
            res.end(data.toString());
            break;
        }
        default:{
            res.statusCode = 404;
            res.end('<h1>Not Found</h1>');
        }
    }
})

server.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
});