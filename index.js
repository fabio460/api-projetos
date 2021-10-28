const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001
app.use(express.static('arquivos'));


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
})

app.get('/:texto',async(req,res)=>{
    const str = req.params.texto
    const p = await projeto.find({"titulo": str})
    res.json(p)
  })

app.post('/',multer(config).single('imagem'),(req,res)=>{
   const sim = projeto.create({
        titulo:req.body.titulo,
        imagem:req.file.filename,
        descricao:req.body.descricao,
        url:req.body.url
   })
   if(sim){
       res.send('inserido com sucesso')
   }else{
       res.send('falha na inserção')
   }
})
app.delete('/',(req,res)=>{
    
})
app.listen(PORT,()=>{console.log('conectado na porta 3001')});