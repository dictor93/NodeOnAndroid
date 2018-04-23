const http = require('http');
const port = 3000;
const requestHandler = (request, response) => {
    if(request.url === "/favicon.ico"){
        console.log("Client need favicon");
    }else
        console.log(request.url);
        response.end('Hello Node.js Server!');
    }
}
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
})