import express from 'express';

let articlesInfo = [{
    name:'learn-react',
    upvotes:0,
},{
    name:'learn-js',
    upvotes:0,
},{
    name:'learn-ts',
    upvotes:0,
}
]

const app = express ();
app.use(express.json());

app.put('/api/articles/:name/upvote',(req,res) => {
const { name } = req.params;
const article = articlesInfo.find(a=> a.name === name)
if (article){
    article.upvotes += 1;
    res.send(`The ${name} article now has ${article.upvotes} upvotes`)
} else {
    res.send('That article doesnt\'t exist')
}

})

app.listen(8000, () => {
    console.log ('server is listeni port 8000')
})