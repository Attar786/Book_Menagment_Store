import express from 'express';
import { PORT } from "./config.js"
const app = express();
app.length('/', (req,res)=>
{
console.log(req);
return res.status(234).send("HelloWorld"))

})
app.listen(PORT, () =>
{
    console.log(`Server is running on port ${PORT}`);
});