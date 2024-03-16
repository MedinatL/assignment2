const http = require('node:http');
const fs = require('fs')
const path = require('path')

const hostname = 'localhost';
const port = '3000';


const requestHandler = (req, res) => {
    if(req.url === '/books' && req.method === 'GET')
        res.write("get books!");

    else if(req.url === '/books' && req.method ==='PUT')
        res.write("put books!");

    else if(req.url === '/books' && req.method === 'DELETE')
        res.write("delete books!");
        
    
    else if(req.url === '/books/authors' && req.method === 'GET')
        res.write("get books!");

    else if(req.url === '/books/authors' && req.method === 'POST')
        res.write("post books!");

    else if(req.url === '/books/authors' && req.method === 'PUT')
        res.write("put books!");
        response.end();

    

    

    

}
    


const server = http.createServer(requestHandler)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

