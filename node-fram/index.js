const fs   = require("fs");
const http = require('http');
//const path = require("PATH");

/////////////////
//server

const server = http.createServer((req,res) =>{
    const pathName = req.url;
    if(pathName == '/' || pathName == '/overView' ){
        res.end('This is overView');
    }else if(pathName == '/product'){
        res.end('This is product');
    }else if(pathName === '/api'){
        fs.readFile(`${__dirname}/dav-data/data.json`,'utf-8',(err, data) =>{
            const productData = JSON.parse(data);
            console.log(productData);
        });
        res.end('api');
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