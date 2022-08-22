// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for plants
const Plant = require('../models/plant')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /plants
router.get('/greenhome', (req, res, next) => {
	// we want everyone to see our plants whether they are logged in or not, we remove the `requireToken`
	// if we wanted to protect these resources, we can add the requireToken middleware in
	// requireToken goes between the route and the callback function
	Plant.find()
		.then((plants) => {
			// `plants` will be an array of Mongoose documents
			// we want to convert each one to a POJO, so we use `.map` to
			// apply `.toObject` to each one
			return plants.map((plant) => plant.toObject())
		})
		// respond with status 200 and JSON of the plants
		.then((plants) => res.status(200).json({ plants: plants }))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// SHOW
// GET /plants/5a7db6c74d55bc51bdf39793
router.get('/greenhome/:id', (req, res, next) => {
	// we want everyone to see our plants whether they are logged in or not, we remove the `requireToken`
	// if we wanted to protect these resources, we can add the requireToken middleware in
	// requireToken goes between the route and the callback function
	// req.params.id will be set based on the `:id` in the route
	Plant.findById(req.params.id)
		.then(handle404)
		// if `findById` is succesful, respond with 200 and "plant" JSON
		.then((plant) => res.status(200).json({ plant: plant.toObject() }))
		// if an error occurs, pass it to the handler
		.catch(next)
})




module.exports = router
