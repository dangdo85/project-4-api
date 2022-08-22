// seed.js is going to be the file we run, whenever we want to seed our database, we'll create a bunch of plants at once.

// we want to be careful with this, because when we run it, it'll delete all of the plants in the db. 

// we can modify this later, to only delete plants that don't have an owner already, but we'll keep it simple for now.

const mongoose = require('mongoose')
const Plant = require('./plant')
const db = require('../../config/db')

const startPlants = [
    {
    name: "", 
    description: "", 
    light: "", 
    water: "", 
    temperature: "", 
    poisonous: "", 
    image: ""
    },
    
]

// first we need to connect to the database
mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        // first we remove all of the plants

        // owner: null prevents the deletion of items with an owner when we seed
        Plant.deleteMany({owner: null })
            .then(deletedPlants => {
                console.log('deletedPlants', deletedPlants)
                // the next step is to use our startPlants array to create our seeded plants
                Plant.create(startPlants)
                    .then(newPlants => {
                        console.log('the new plants', newPlants)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })