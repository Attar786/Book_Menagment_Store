import express, { response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js'
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Hello World"); // Status code 234 is non-standard, 200 is more appropriate for success
});
app.post('/books', async (req, res) => {

try {
    if(
!req.body.title || req.body.author || req.body.publishYear
    )
    {
        return response.status(400).send({
            message: "Please provide all the required fields"
        });
    }
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear
    };
const book = await Book.create(newBook);
return res.status(201).send(book)
    
} catch (error) {
    console.log(error.message);
    response.status(500).send({message: error.message});
}

})



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
