import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import BooksRoute from './routes/BooksRoute.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Hello World");
});

app.use('/books', BooksRoute);

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
