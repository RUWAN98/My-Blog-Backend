import express from 'express';

const app = express ();
app.use(express.json());

app.post('/hello',(req,res)=>{
    res.send(`Hello ${req.body.name}!` );
})

app.get('/hello/:name/goodbye/:otherName',(req,res)=>{
    console.log(req.params);
    const { name } = req.params;
    res.send(`Hello ${name}!!`);
})

app.listen(8000, () => {
    console.log ('server is listeni port 8000')
})