const express = require('express');
const app = express();
let port = 3000;

import produtos from "/produtos.js"


app.get("/",(req,res)=>{
    res.send("Funcionando")

});

app.use((req,res)=>{
    res.send("Pagina não encontrada")

});

app.listen(port, ()=>{
    console.log("Backend Rodando na porta ${port}"+port)
});