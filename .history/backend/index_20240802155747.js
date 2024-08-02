import express from 'express';
// import { PORT } from "./config"
const PORT = 5040;
const app = express();
app.listen(PORT, () =>
{
    console.log(`Server is running on port ${PORT}`);
});