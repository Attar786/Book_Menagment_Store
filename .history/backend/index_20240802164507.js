import express from 'express';
import { PORT, mongoDBURL } from "./config.js"
import mongoose from 'mongoose';
const app = express();
app.get('/', (req,res)=>{
console.log(req);
app.listen(PORT, () =>
    {
        console.log(`Server is running on port ${PORT}`);
    });
return res.status(234).send("HelloWorld")
});


mongoose.connect(mongoDBURL).then(()=>
{
    console.log("Connected to MongoDB");
  
}).catch((error)=>
{
    console.log(error);
})