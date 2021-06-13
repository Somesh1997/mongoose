const express=require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId=require('mongodb').ObjectId;

const app= express();

// DB setup
let db;
//By Async Await

(async function(){ 
    try{
      const client =await MongoClient.connect('mongodb://localhost:27017');
      db=client.db('somesh');
    }  
    catch(error){
        throw error;
    } 
})();


// By callBack

// MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  
//   if (err) throw err

//   db = client.db('somesh')

  
// })

app.get('/',async (req,res)=>{
      
    try{
       let res1= await db.collection('comments').findOne({"_id":ObjectId("60c5d23552b5a2222803dfc5")});
       res.send({res1:res1,"msg":"hello"});
    }
    catch(err){
       console.log(err);
    }

  
})


async function add(req,res){
    try{
       let res1=await db.collection('comments').insertOne({
            name:"Kalu Kumar",
            age:20,
            data:"somu"
       })
       res.send({
           res1:res1
       })
    }
    catch(err){
        console.log(err);
    }
}
app.get('/add',add);

app.listen(4000,(req,res)=>{ 
    console.log("seraaver is running");
})