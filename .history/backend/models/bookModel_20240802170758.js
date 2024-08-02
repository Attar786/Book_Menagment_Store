import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title:
        {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100
        },
        author:
        {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100
        },
        publishYear:
        {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100
        },
    },
    {
        Timestamp: true
    }
);

export const Book = mongoose.model('Cat', bookSchema);
