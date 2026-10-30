const express = require('express');
const app = express();
const port = 3000;

const produtos = require('./produtos.js')


app.get("/",(req,res)=>{
    res.send(produtos)

});

app.use((req,res)=>{
    res.sendFile(__dirname + '/404.html')

});

app.listen(port, ()=>{
    console.log("Backend Rodando na porta ${port}"+port)
});