import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js'
const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Hello World"); // Status code 234 is non-standard, 200 is more appropriate for success
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log(error);
    });
