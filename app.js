const http = require('http')

const server = http.createServer((req,res) => {
  if(req.url === '/'){
     res.end('Wellcome to our page');
  }
  if(req.url === '/about'){
    res.end("this is about")
  }
  res.end(`
    <h1>Opps</h1>
    <p>this page is not here</p>
    <a href="/">Back home</a>
   `)
})

server.listen(5000)
