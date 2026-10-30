const express = require('express');
const app = express();
let port = 3000;

app.use(json);
app.get("/",(req,res)=>{
    res.send("Funcionando")

});

app.use(req,res)=>{
    res.send("Pagina não encontrada")

};

app.listem(port, ()=>{
    console.log("Backend Rodando na porta ${port}")
});