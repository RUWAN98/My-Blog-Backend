import express from 'express';

const app = express ();
app.use(express.json());

app.post('/hello',(req,res)=>{
    res.send(`Hello ${req.body.name}!` );
})

app.listen(8000, () => {
    console.log ('server is listeni port 8000')
})