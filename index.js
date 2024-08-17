const express= require("express");
const app=express();
const path=require("path");
const port =3000;

app.use(express.urlencoded({ extended: true }));


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

const posts=[
    {username:"Atharvan",
    content:"I am learning Web Backend"},
    {username:"SaukhyaS",
    content:"I am learning German"},
    {username:"SahilK",
content:"I am learning Python"},
];

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.get('/posts',(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get('/posts/new',(req,res)=>{
    res.render("new.ejs");
});

app.post('/posts',(req,res)=>{
    
    let {username,content} = req.body;
    posts.push({username,content});
    res.redirect('/posts')
});





