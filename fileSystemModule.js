const fs = require('fs');
// const path = require('path');

fs.readFile('file.txt','utf8', (err,data)=>{
    console.log(err, data);
})

console.log('_readFile function facilitates to read file')


// If we want to read file asynchronously the use readFileSync

const fileContent = fs.readFileSync('file.txt');

console.log('fileContent Sync', fileContent.toString());
console.log('after fileContent');

// written data to the file using non block I/O writeFile method.It will create file as well

fs.writeFile('file2.txt', 'This is data that needs to be written to file',()=>{
    // This callback will run when data written into file.
    console.log('data written');
})
console.log('This line not blocked by writeFile I/O method.It will run before above callback');

//writeFileSync method

const result = fs.writeFileSync('file2.txt','sync data');

console.log('result',result);
console.log('sync file read ends');


// From command line give dynamic arguments to create file:

// const fs = require('fs');

const input = process.argv;
console.log('input',input);

fs.writeFileSync(input[2],input[3]);

// cmd line node fileSystemModule.js apple.txt 'this is apple file'



// fs.unlinkSync(filename) // to remove file


// read files from directoy

// const expressLearningdir = path.join(__dirname,'expressLearning/public') 
// fs.readdir(expressLearningdir,(err,files)=>{
//     console.warn('files',files);
// })


// rename() to rename file

// appendFile() to update file content