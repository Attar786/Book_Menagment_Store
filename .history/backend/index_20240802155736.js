import express from 'express';
// import { PORT } from "./config"
const PORT = 5000;
const app = express();
app.listen(PORT, () =>
{
    console.log(`Server is running on port ${PORT}`);
});