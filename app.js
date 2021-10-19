const express = require('express')
const PUERTO = 3030
const app = express();
const path = require('path')

const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath));


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname, '/views/register.html'));
});



app.listen(process.env.PORT ||
    PUERTO, () => console.log('Corriendo en 3030'));