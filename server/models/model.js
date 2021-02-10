const mongoose = require("mongoose");

const Quote = mongoose.model("Quote", {
    quote: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate(value) {
            if (value.length <= 0) {
                throw new Error("There is no quote to save");
            }
        },
    },
    author: {
        type: String,
        trim: true,
    },
});

module.exports = Quote;