import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import BooksRoute from './routes/BooksRoute.js';
import cors from 'cors';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Hello World");
});
app.use(
    cors({
        origin: 'http://localhost:3000',
        method: ['GET','POST','DELETE','PUT'],
        allowedHeaders: ['Content-Type'],
        
    })
);
app.use('/books', BooksRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
