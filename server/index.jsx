const express =require("express")
const cors = require ("cors")
require('dotenv').config()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json())

const {Schema}=mongoose;

const userSchema = new Schema ({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true}
})

const Users = mongoose.model("user",userSchema)



//GET ALL DATA

app.get("/users", (req,res)=>{
    Users.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(404).json({message:err})
        }
    })
})

//get user by id

app.get("/users/:id", (req,res)=>{
    let {id} = req.params
    Users.findById(id,(err,doc)=>{
        if (!err) {
            if (doc) {
                res.send(doc)
            }else{
                res.status(404).json({message:err})
            }
        }
    })
})

//delete

app.delete("/users/:id",(req,res)=>{
    let {id}=req.params;
    Users.findByIdAndDelete(id,(err,doc)=>{
        if (!err) {
            res.status(202).json({message:"Seccessful delete"})
        }else{
            res.status(404).json({message:err})
        }
    })
})

//post

app.post("/users",(req,res)=>{
    let newUser = new Users({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price
    })
    newUser.save()

    res.send({message:"Seccessful Post"})
})


const PORT =process.env.PORT;
const url = process.env.CONNECT_URL.replace(
    "<password>",
    process.env.PASSWORD
)

mongoose.set('strictQuery', false);
mongoose.connect(url ,(err)=>{
    if (!err) {
        console.log("db connect");

        app.listen(PORT,()=>{
            console.log("server start");
        })
    }
})