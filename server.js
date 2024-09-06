const { response }= require('express');
const http =require('http');
const path =require('path')
const fs =require('fs')

//request and response 
//request is the backend 
//response is to the frontend 
// method | path | protocol 
const server = http.createServer((req , res)=>{
    console.log(req.url);
    console.log(req.method);
    
    if (req.url === '/about' && req.method === 'GET') {
        const filePath =path.join(__dirname,'About.html');

        fs.readFile(filePath,(err,data)=>{
            if (err) {
                res.end('err');
                
            } else {
                res.end(data);
            }
        })



        //Always use write head before sending the response 
        //  res.writeHead(201 ,{'Content-Type':'text/plain'});
        // res.end('about page ');
        
    }
    else if (req.url === '/services') {
        res.end('services page ');
    }
    else{
        res.end('home page ');
    }

});

server.listen(3000,()=>{
    console.log('server is running ');
});

http => request , response 

// 404 from frontend 
// status code 
// 5
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

//request method 
//REVIEW req.method => we have different req methods we can use to send request from client to the server most common used methods are : 
//NOTE GET => used to get the data from backend.
//NOTE POST => used to send data for the processing in the backend.
//NOTE PUT => used to update or replace the data
//NOTE PATCH => used to perform partial update
//NOTE DELETE => used to delete any entry in the backend


//TODO http , http  status code , request and response object , http methods , response , request cycle , web server , request and response headers