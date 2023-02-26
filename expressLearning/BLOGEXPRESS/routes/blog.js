const express = require('express');
const path = require('path');
const blogs = require('../data/blogs')

const router = express.Router();

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../views/index.html'));

    //Now using handlebars so comment above line, we can pass blogs as a variable

    res.render('home',{
        blogs:blogs
    });
})

router.get('/blogs',(req,res)=>{
    // blogs.forEach(e=>{
    //     console.log('e',e);
    // })
    res.sendFile(path.join(__dirname,'../views/blogHome.html'));
})

module.exports = router;