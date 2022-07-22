const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('content-type', 'text/html');

    let path = 'index.html';
 
    fs.readFile(path, (err, data) => {

        if(err){
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    })


});

server.listen(2000, 'localhost', () => {
    console.log('listening on port 2000 on localhost');
});