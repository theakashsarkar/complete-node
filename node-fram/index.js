const fs   = require("fs");
const http = require('http');

/////////////////
//server

const server = http.createServer((req,res) =>{
    const pathName = req.url;
    if(pathName == '/' || pathName == '/overView' ){
        res.end('This is overView');
    }else if(pathName == '/product'){
        res.end('This is product');
    }else{
        res.writeHead(404,{
            "content-type":"text/html",
            'my-own-header': 'hello world'
        })
        res.end('<h1>Page not found</h1>');
    }
})
server.listen(8080, () => {
    console.log("listening to request on port 8080");
});