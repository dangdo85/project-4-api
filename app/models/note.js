// import dependencies
const mongoose = require("mongoose")

// note/comment is a subdoc and not a model

const noteSchema = new mongoose.Schema({
    note: {
        type: String,
        require: true
    },
}, {
    timestamps: true
})

module.exports = noteSchema