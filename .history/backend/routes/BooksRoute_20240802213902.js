app.post('/books', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: "Please provide all the required fields"
            });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };

        const book = await Book.create(newBook);
        return res.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

app.get('/books', async (req, res) => {
    try {
        const book = await Book.findById({}); // Pass the ID directly to findById
      
        return res.status(200).json({
            count:books.length,
            data : books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});
app.get('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id); // Pass the ID directly to findById
        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});
app.put('/books/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: "Please provide all the required fields"
            });
        }

        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).send({ message: "Book updated successfully" });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});
app.delete('/books/:id', async (req,res)=>
{
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
        
            res.status(404).send ({ message: "Book not found" });
        
        }
        res.status(200).send({ message: "Book deleted successfully" });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})
