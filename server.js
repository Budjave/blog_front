const express = require('express')
const colors = require('colors')
const app = express()

app.get('/',(req,res) =>{
    res.end('hello world')
})

const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`server aslaa ${port}`.bgGreen.white)
})
// const http =require('http');

// const hostname = '127.0.0.1';
// const port = 8080;

// const server = http.createServer((req,res) =>{
//     res.statusCode =200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('hello world');
// });

// server.listen(port, hostname, () => {
//     console.log(`server running at http://${hostname}:${port}/`)
// })