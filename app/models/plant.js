// PLANT -> have an owner, that is a user
// might bring in subdocument schema (NOTES)

const mongoose = require("mongoose")

const {Schema, model } = mongoose

const plantSchema = new Schema(
    {
        name: {
            type: String,
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
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }, {
        timestamps: true,
        // we're going to be adding virtuals to our model, the following lines will make sure that those virtuals are included whenever we return JSON or an Object
        // toObject: { virtuals: true },
        // toJSON: { virtuals: true }
    }
)

// // virtuals go here
// // these are virtual properties, that use existing data(saved in the database), to add a property whenever we retrieve a document and convert it to JSON or an object.
// snowboardSchema.virtual('fullTitle').get(function () {
//     // in here, we can do whatever javascripty things we want, to make sure we return some value that will be assigned to this virtual
//     // fullTitle is going to combine the brand and type to build a title
//     return `${this.brand} - ${this.type}`
// })

// snowboardSchema.virtual('isAShortBoard').get(function () {
//     if (this.size < 145) {
//         return "definitely a short board!"
//     } else if (this.size >= 145 && this.size < 155) {
//         return "definitely not a short board, but still a short board!"
//     } else {
//         return "a decent size board!"
//     }
// })



// EXPORT THE MODEL
module.exports = model("Plant", plantSchema)