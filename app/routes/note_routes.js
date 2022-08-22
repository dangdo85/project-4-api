// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for myplants
const Myplant = require('../models/myplant')


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
// POST /notes/<myplant_id>/
router.post("/notes/:myplantId", removeBlanks, (req, res, next) => {
    // get our note from req.body
    const note = req.body.note
    // get our myplant's id from req.params.myplantId
    const myplantId = req.params.myplantId
    // find the myplant
    Myplant.findById(myplantId)
        .then(handle404)
        .then(myplant => {
            console.log("Yooo this is my plant!", myplant)
            console.log("ayyeeee this is the note for the plant", note)

            // push the note into the myplant's notes array
            myplant.notes.push(note)

            // save the action
            return myplant.save()
        })
        .then(myplant => res.status(201).json({ myplant : myplant }))
        .catch(next)
})


// PATCH -> update a note
// PATCH /notes/<myplant_id>/<note_id>
router.patch("/notes/:myplantId/:noteId", requireToken, removeBlanks, (req, res, next) => {
    // get the note  and the myplant ids saved to variables
    const myplantId = req.params.myplantId
    const noteId = req.params.noteId

    // find the myplant that belongs to the owner
    Myplant.findById(myplantId)
        .then(handle404)
        .then(myplant => {
            // single out the correct note (.id is a subdoc method to find something in an array of subdocs)
            const theNote = myplant.notes.id(noteId)
            // make sure the user = owner --- request is accurate
            requireOwnership(req, myplant)
            // update the note with a subdoc method
            theNote.set(req.body.note)
            // return the saved myplant
            return myplant.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


// DELETE -> delete a note
// DELETE /notes/<myplant_id>/<note_id>
router.delete("/notes/:myplantId/:noteId", requireToken, (req, res, next) => {
    const myplantId = req.params.myplantId
    const noteId = req.params.noteId
    // we find the myplant
    Myplant.findById(myplantId)
        // handle a 404
         .then(handle404)
         // do stuff with note --- delete the note
         .then(myplant => {
            // get the subdoc the same way as the update route
            const theNote = myplant.notes.id(noteId)
            // require ownership in order for the user to delete the note
            requireOwnership(req, myplant)
            // called remove on the subdoc
            theNote.remove()
            // return the saved myplant
            return myplant.save()
         })
         // send 204 no content status since this is a delete route
         .then(() => res.sendStatus(204))
        // handle any errors
         .catch(next)
})



// export the router
module.exports = router