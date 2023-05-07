const express = require("express")
const bodyParser = require("body-parser")
let ejs = require('ejs');
const _ = require("lodash") ;

const app = express() ;
app.set('view engine' , 'ejs') ;
app.use(bodyParser.urlencoded({extended:true})) ;
app.use(express.static("public")) ;

const blog1 =" blog  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit assumenda, accusantium pariatur consequatur nihil dignissimos placeat sit modi ipsam ipsum libero sed ut esse excepturi eum, natus rem ad? Pariatur, excepturi libero! Ab excepturi pariatur esse repellendus consequatur, tempora officia similique saepe quae repellat eius rerum quasi atque dolorum." ;
const contact ="contact Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit assumenda, accusantium pariatur consequatur nihil dignissimos placeat sit modi ipsam ipsum libero sed ut esse excepturi eum, natus rem ad? Pariatur, excepturi libero! Ab excepturi pariatur esse repellendus consequatur, tempora officia similique saepe quae repellat eius rerum quasi atque dolorum." ;
const about ="about Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit assumenda, accusantium pariatur consequatur nihil dignissimos placeat sit modi ipsam ipsum libero sed ut esse excepturi eum, natus rem ad? Pariatur, excepturi libero! Ab excepturi pariatur esse repellendus consequatur, tempora officia similique saepe quae repellat eius rerum quasi atque dolorum." ;

var post = [{title:"me" , des:"mpl"}] ;

app.get("/" , function(req , res){
    res.render("index",{b1 : blog1 ,posts : post} );
})

app.get("/contact" , function(req , res){
    res.render("contact",{b1 : contact} );
})

app.get("/about" , function(req , res){
    res.render("about",{b1 : about} );
})
app.get("/compose" , function(req , res){
    res.render("compose" , );
})

app.get("/posts/:topic" , function(req , res){
    const topic = _.lowerCase(req.params.topic) ;
    
    for(var i =0 ; i<post.length ; i++)
    {
        if( _.lowerCase(post[i].title)===topic)
        {
            res.render("post" , {t1 : post[i].title , content : post[i].des})
        }
        
    }
    res.redirect("/") ;
});


app.post("/compose" , function(req ,res){
    const post1 ={
        title : req.body.title ,
        des : req.body.descrip 
    }
    post.push(post1) ;
    res.redirect("/") ;
})
app.listen(3000 , function(){
    console.log("gfnolk") ;
})