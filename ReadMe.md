Course : https://www.youtube.com/watch?v=BLl32FvcdVM

https://www.youtube.com/watch?v=VrQgmNY96wo&t=22019s


> Single threaded handles multiple connection in node. node js is non blocking single threaded. It is Asynchronous

> Install Express by npm i express

> init proj as a node by npm init

> NODEMON
> nodemon package basically if we done any changes in file automatically rerun it. nodemon index.js.
> Beneficially when we are running https server.

       npm install nodemon -g ( installing it globally in our OS)

> dependency vs devDependency

> Package-lock.json

    /*
        To maintain package dependency Tree.For example express package has internal 10 package dependency,
        like from package json we came to know about express version like 4.18.12 but it has 10 package dependency
        whose version from where we will get so Here package-Lock helps to maintain it.
    */

    Package.json contains packages what we have installed and package-lock.json contains dependency tree.

> Imports

> ES6/EcmaScript module vs Common js module ( modulefirst.js)

    => In node js module System , each file is treated as a separate module.
    => To use ECMASCRIPT module we have to use .mjs extension. .mjs extension is reserved for ES6 module so we cannot use require inside it. Also we have to add ( type: "module" ) in package.json to fix issue.
       Make sure your package.json includes a line for "type": "module". Without this line, Node.js assumes you want to use CommonJS modules rather than ESM.

> Module Wrapper function

    When any module run in node js it wraps it inside the function, so that's why we will be able to get module.exports, ___dirname etc in the code.

     function(exports, require, module, __filename, __dirname){

     }

> Learn About some built in node js modules, We can import built-in modules without using '/'

        require('os');

> Os module, Path Module

> I/O functions

    readFile, readFileSync, writeFile, writeFileSync ( details mentioned in fileSystemModule.js)

> URL module

> EventEmitter module

    How to emit events and listen it. Listen using 'on' , emit using 'emit' method.

> http

    Creating or own server using http module

> Create a website.js that will serve different content based on different url, websiteContent file used for it.

> Express in Brief ( express js framework in nodejs)

    Instead of using http we are using express as it has ready to use feature,less code required as compared to http.

> Promise , setTimeout all in nodejs

How Node Js Works

=> call stack => node API => callback queue => event Loop

> make html pages: suppose we are sending string in res.send(), if we have to make static website then there is need to send large html data or page that is not feasible in res.send directly so will create html pages for it.

app.use(express.static(/_folder Path from where serve content_/)) // it is used to load static content

we can access url/home.html

> Remove extensions from URL

    if we have to remove extensions we will not use express.static() method.
     const publicPath = path.join(__dirname,'public') // folder contains static data
     app.get('',(_,resp)=>{
        resp.sendFile(`${publicPath}/index.html`)
     })

     app.get('/about',(_,resp)=>{
        resp.sendFile(`${publicPath}/about.html`)
     })

    // below work if not any url match means suppose we have to create 404

     app.get(*,(_,resp)=>{
        resp.sendFile(`${publicPath}/about.html`)
     })

> Template Engine (using ejs)
  Used to make dynamic pages
  For any template engines we always need views folder
   
   How to use

    1.app.set('view engine','ejs'); // code where we are creating express server
    2.create views folder and file under it with extension(.ejs) ex profile.ejs
    3.  app.get('/profile',(_,resp)=>{ // code where we are creating express server
        const  user = {
            name:'Tejinder',
            age:30,
            skills:['cricket', 'js', 'php']
        }
        resp.render('profile',{user});
    });

    4. Inside profile.ejs how to get that user data 
        <body>
             <h1><%= user.name %> </h1>
              <h1><%= user.age %> </h1>
              <ul>
               For Loop inside .ejs file
                <% user.skills.forEach((skill)=>{
                    <li><%= item %></li>
                })%>
              </ul>
        </body>

    > We can also include one ejs file on another 
      - means load html
     <%- include('folder/fileName') %>
   

> Middleware ( used to filter req, resp , example for authentication purpose)

    const reqFilter  = (req, res, next){
        console.log('filter');
        if(!req.query.age){
            res.send('please provide age');
        }
        next() // if we will not use next()  (next() means load next route), then it loads at same page not next app.get() works.
    }

    app.use(reqFilter);   // This is Application-level Route 

    app.get('',(req,res)=>{

    })

    Middleware Types:

     Application-level, Router-level, Built-in, Third-party, error-handling

> Route-Level Middleware
  
   Apply middleware to a group of routes or single route instead of all routes. we can also apply to all routes.

      const reqFilter  = (req, res, next){
        console.log('filter');
        if(!req.query.age){
            res.send('please provide age');
        }
        next() // if we will not use next()  (next() means load next route), then it loads at same page not next app.get() works.
      }
      
    app.get('',(req,res)=>{

    })

     app.get('/user',reqFilter, (req,res)=>{

     } ) // apply reqFilter middleware to /user only.

If we have 30 40 routes then it is not good practice to add on each route individually. 

    const reqFilter = require('./middleware')  // create separate middleware file where we placed reqFilter
    const route = express.Router();

    route.use(reqFilter);   // register middleware

    route.get('',(req,res)=>{   // instead of app use route wherever we have to apply middleware for particulars route

    })

    route.get('/user',(req,res)=>{

    })

     app.get('/profile',(req,res)=>{

    })

    app.use('/',route);  // needs to add to register route instance


> Mongo DB: it is NoSQL database. Data stored in collection . Collection don't have rows , columns. Data is stored in form of object.

    Prefer mongoDb for unstructured data. Like one object has 2 keys other has more keys.But in sql colums , rows should be present either empty so consumes more memory.
    
    mongo compass Tools ( GUI instead of using cmd)

    cmd: mongo // gives mongo installed or not

    show dbs  // dbs list

    collection in mongoDb is like table in sql


