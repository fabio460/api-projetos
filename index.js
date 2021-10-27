const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001

//conexão
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db = mongoose.connection;
db.on("err",err=>console.error(err))
db.once("open",()=>{console.log("conectado no banco de dados")})

//criando tabela no mongo
const schema = mongoose.Schema({
    titulo:'string',
    imagem:'string',
    descricao:'string',
    url:'string',
})
const projeto = mongoose.model('meu_projeto',schema);
app.use(express.json());
app.get('/',async(req,res)=>{
  const p = await projeto.find();
  res.json(p)
})
app.post('/',(req,res)=>{

})
app.delete('/',(req,res)=>{
    
})
app.listen(PORT,()=>{console.log('conectado na porta 3001')});