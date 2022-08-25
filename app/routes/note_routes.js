// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for plants
const Plant = require('../models/plant')


const customErrors = require('../../lib/custom_errors')


const handle404 = customErrors.handle404

const requireOwnership = customErrors.requireOwnership


const removeBlanks = require('../../lib/remove_blank_fields')

const requireToken = passport.authenticate('bearer', { session: false })


const router = express.Router()

// ROUTES GO HERE!!
// ONLY NEED THREE ROUTES
// ENSURE TO USE MIDDLEWARE CORRECTLY

// POST -> create a note
// POST /notes/<plant_id>/
router.post("/notes/:plantId", removeBlanks, (req, res, next) => {
    // get our note from req.body
    const note = req.body.note
    // get our plant's id from req.params.plantId
    const plantId = req.params.plantId
    // find the plant
    Plant.findById(plantId)
        .then(handle404)
        .then(plant => {
            console.log("Yooo this is my plant!", plant)
            console.log("ayyeeee this is the note for the plant", note)

            // push the note into the plant's notes array
            plant.notes.push(note)

            // save the action
            return plant.save()
        })
        .then(plant => res.status(201).json({ plant : plant }))
        .catch(next)
})


// PATCH -> update a note
// PATCH /notes/<plant_id>/<note_id>
router.patch("/notes/:plantId/:noteId", requireToken, removeBlanks, (req, res, next) => {
    // get the note  and the plant ids saved to variables
    const plantId = req.params.plantId
    const noteId = req.params.noteId

    // find the plant that belongs to the owner
    Plant.findById(plantId)
        .then(handle404)
        .then(plant => {
            // single out the correct note (.id is a subdoc method to find something in an array of subdocs)
            const theNote = plant.notes.id(noteId)
            // make sure the user = owner --- request is accurate
            requireOwnership(req, plant)
            // update the note with a subdoc method
            theNote.set(req.body.note)
            // return the saved plant
            return plant.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


// DELETE -> delete a note
// DELETE /notes/<plant_id>/<note_id>
router.delete("/notes/:plantId/:noteId", requireToken, (req, res, next) => {
    const plantId = req.params.plantId
    const noteId = req.params.noteId
    // we find the plant
    Plant.findById(plantId)
        // handle a 404
         .then(handle404)
         // do stuff with note --- delete the note
         .then(plant => {
            // get the subdoc the same way as the update route
            const theNote = plant.notes.id(noteId)
            // require ownership in order for the user to delete the note
            requireOwnership(req, plant)
            // called remove on the subdoc
            theNote.remove()
            // return the saved plant
            return plant.save()
         })
         // send 204 no content status since this is a delete route
         .then(() => res.sendStatus(204))
        // handle any errors
         .catch(next)
})



// export the router
module.exports = router