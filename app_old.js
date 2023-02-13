const http=require("http")

http.createServer((req,res)=>{
    res.writeHead(200,{'contet-type':'application/csv'})
    const persona={
        id:1,
        nombre:'fernando'
    }
    res.write( JSON.stringify(persona))
    res.end()
}).listen(8080)
console.log("escuchando en el puerto 8080")