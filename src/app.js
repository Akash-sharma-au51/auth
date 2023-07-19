const express = require('express')
const path = require("path")
const hbs = require("hbs")
require("./db/connection")

const app = express();

const template_path = path.join(__dirname,"./template/views")

const partial_path = path.join(__dirname,"./template/partials")


const port = process.env.PORT ||3000

app.set('view engine',"hbs")

app.set("views",template_path)
hbs.registerPartials(partial_path)

app.get("/",(req,res)=>{
    res.render("index")
})
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
