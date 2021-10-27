const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('teste')
})
app.post('/',(req,res)=>{

})
app.delete('/',(req,res)=>{
    
})
app.listen(3001,()=>{console.log('conectado na porta 3001')});