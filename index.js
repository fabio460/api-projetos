const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://meuBanco:fabio2020@cluster0.w2xad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db = mongoose.connection;
db.on("err",err=>console.error(err))
db.once("open",()=>{console.log("conectado no banco de dados")})


app.get('/',(req,res)=>{
    res.send('teste')
})
app.post('/',(req,res)=>{

})
app.delete('/',(req,res)=>{
    
})
app.listen(3001,()=>{console.log('conectado na porta 3001')});