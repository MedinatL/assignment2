const http = require('node:http');
const fs = require('fs')
const path = require('path')

const hostname = 'localhost';
const port = '3000';


const requestHandler = (req, res) => {
    if(req.url === '/' && req.method === 'GET')
        res.write("read books!");
    
    else if(req.url === '/books/authors' && req.method === 'POST')
        res.write("create books!");
    

    else if(req.url === '/books' && req.method ==='PUT')
        res.write("update books!");


    else if(req.url === '/books' && req.method === 'DELETE')
        res.write("update books!");
        response.end();

}
    


const server = http.createServer(requestHandler)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

