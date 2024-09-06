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
