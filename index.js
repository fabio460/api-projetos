const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{
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
app.listen(PORT,()=>{console.log('conectado na porta 3001')});