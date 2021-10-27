const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001
<<<<<<< HEAD
app.use(express.static('arquivos'));


//conexão
=======
>>>>>>> parent of 286322d (teste de deploy 5)
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db = mongoose.connection;
db.on("err",err=>console.error(err))
db.once("open",()=>{console.log("conectado no banco de dados")})

<<<<<<< HEAD
//criando tabela no mongo
const schema = mongoose.Schema({
    titulo:'string',
    imagem:'string',
    descricao:'string',
    url:'string',
})
const projeto = mongoose.model('meu_projeto',schema);
app.use(express.json());


//config multer

const multer = require('multer');
const path = require('path');
const crypo = require('crypto');
const config = {
    storage:multer.diskStorage({
        destination: (req,file,cb)=>{
          cb(null,path.resolve(__dirname,"arquivos"))
        },
        filename: (req,file,cb)=>{
            crypo.randomBytes(8,(err,hash)=>{
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null,fileName);
            })
        }
    })
}




app.get('/',async(req,res)=>{
  const p = await projeto.find();
  res.json(p)
=======

app.get('/',(req,res)=>{
    res.send('teste')
>>>>>>> parent of 286322d (teste de deploy 5)
})


app.post('/',multer(config).single('imagem'),(req,res)=>{
     
})
app.delete('/',(req,res)=>{
    
})
app.listen(PORT,()=>{console.log('conectado na porta 3001')});