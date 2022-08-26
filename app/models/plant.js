// PLANT -> have an owner, that is a user
// might bring in subdocument schema (NOTES)

const mongoose = require("mongoose")

const noteSchema = require('./note')

const { Schema, model } = mongoose

const plantSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
        },
        light: {
            type: String,
        },
        water: {
            type: String,
        },
        temperature: {
            type: String,
        },
        poisonous: {
            type: String,
        },
        image: {
            type: String,
        },
        notes: [noteSchema],
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        // We will have to add isSeeded to seed model, and we will have to add isSeeded to our route for CREATE with conditional that is if not on the incoming object, it is false before doing create which should be achieved by the default, but if it doesn't work as intended this is the fix
        isSeeded: {
            type: Boolean,
            require: true,
            default: false
        },
    }, {
        timestamps: true,
        
    }
)





// EXPORT THE MODEL
module.exports = model("Plant", plantSchema)