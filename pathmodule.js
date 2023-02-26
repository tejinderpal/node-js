const path = require('path');

const dirPath = path.join(__dirname) // gives the path of current directory means root folder (NODE) of our project path

console.log('dirPath',dirPath); // /Users/tejinderpal.singh/Desktop/FRONTEND_LEARNING/NODE

// need expressLearning path 

const expressLearning = path.join(__dirname,'expressLearning') 

console.log('expressLearning',expressLearning);

console.log('_pathname of file', path.extname(__filename))



