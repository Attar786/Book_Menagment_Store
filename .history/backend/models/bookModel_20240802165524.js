import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title:
        {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100
        }
    }
);

const Book = mongoose.model('Cat', { name: String });
