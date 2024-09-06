// console.log('hiiii');
// console.log(window)
// console.log(process);
// ~,^ 
// ~this sign will not accept any large changes like 4.19.9 but will not accept 4.20.0.

// importing the nodejs using "common js modules "


// fs module 
// const fs=require('fs');

// const os=require('os');

// const path=require('path');

// readfile sync
// it executes line by line 
// console.log('reading file started ')
// const data =fs.readFileSync('./index.txt','utf-8')//this is synchronus
// console.log(data);
// console.log('reading filr ended')
// this accepts path
// blocking code in th nodejs






// read file using asynchronus 
// console.log('async file started')

// fs.readFile('./index.txt','utf-8',(erro,data)=>{
//         console.log(data)
// })

// console.log('ended')




// writefile and writefileSync

// fs.writeFileSync('./example.txt','hello')


// fs.writeFile('test.txt','async data',()=>{
//     console.log('file created')
// })


// appendfile ,appendfileSync

// fs.appendFileSync('index.txt','test.txt')

// fs.appendFile('index.txt','  new data ',()=>{
//     console.log('new data aaded')

// })

// console.log(os.hostname());
// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.arch());


// path module
// path.direcrory name


// console.log(path.dirname(' C:/Users/angha/OneDrive/Desktop/NodeJs '))

// path.basename

// console.log(path.basename(' C:/Users/angha/OneDrive/Desktop/NodeJs '))


// extension name
// console.log(path.extname(' C:/Users/angha/OneDrive/Desktop/NodeJs '))

// oarse will create object
// console.log(path.parse(' C:/Users/angha/OneDrive/Desktop/NodeJs '))

// this will change the path
// console.log(path.resolve('users','local','bin','index.jx'))

// this will resolve the path
console.log(path.join('users','local','bin','index.jx'))

// this gives directory of current working file
console.log(__dirname);
console.log(__filename);


// rsolve takes the whole path where join does not se in joi we need to pass the __dirname 
// eg const finalPath=path.join(__dirname ,'index.txt')
const finalPath=path.resolve('index.txt')
console.log(finalPath);
fs.readFile(finalPath , 'utf-8', (err,data)=>{
    console.log(data)
})

