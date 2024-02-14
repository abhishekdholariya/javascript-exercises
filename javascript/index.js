console.log("hello");
// 1. Write a JavaScript program that takes an array of numbers as input and returns the sum of all elements in the array.
// var express = require('express');
// var app = express();
// app.use(express.json());

// const port = process.env.PORT || 8081;
// let arr=[];
// function addData(data){
//     let obj={};
//     obj['name']=data.name;
//     obj['age']=parseInt(data.age);
//     obj['email']=data.email;
//     arr.push(obj)
// }

// app.get('/', (req, res) => {  
//     res.send({'message':'Hello World!'});
// })

// app.post('/addData', function (req, res) {
//     const data = req.body;
//     if(!data.hasOwnProperty('name')||!data.hasOwnProperty('age')|| !data.hasOwnProperty('email')){
//         return res.status(400).send({error: 'Missing fields'}).end()
//     }else{
//       addData(data);
//       res.send({'result':"Data added successfully."});
//     }
    
// });

// app.get('/getData/:index', function (req, res) {
//     const index = parseInt(req.params.index);
//     if(isNaN(index)){
//         return res.status(400).send({error:'Invalid Index'}).end()
//     } else if(arr[index]===undefined){
//          return res.status(404).send({error:"Not Found"}).end()
//        }else{
//            res.send(arr[index]);
//        }
// })

// app.put("/updateData/:index",function(req,res){
//     const index = parseInt(req.params.index);
//     const data = req.body;
//     if(arr[index]==null){
//         return res.status(404).send("Data not found").end();
//     }  
//     for(let key in data){
//         if (!data.hasOwnProperty(key)) continue;   
//         arr[index][key]=data[key];
//     }  
//     res.send(arr[index])
// }) 


// app.use((err, req, res, next)=>{
//     console.log(err.stack);
//     res.status(500).send({error: err.message || "Internal Server Error"});
// })

// const portn=process.env.PORT || 3001;
// app.listen(port, ()=>console.log(`Listening on ${port}`));