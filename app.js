const express=require('express')
const app=express();
const port=8080

app.set('view engine','hbs')

//servicio estatico
app.use(express.static('public'))

app.get('/',function(res,req){
    req.render('home',{
        nombre:'fernando',
        titulo:'curso'
    });
})

app.get('/generic',function(res,req){
    req.sendFile(__dirname+'/public/generic.html');
})
app.get('/elements',function(res,req){
    req.sendFile(__dirname+'/public/elements.html');
})
app.get('/holamundo', function(res,req){
    req.send('hola mundo')
})
app.get('*', function(res,req){
    req.send('page not found')
})
app.listen(port,()=>{
    console.log(`app escuchando en el puerto: http://localhost:${port}`)
});