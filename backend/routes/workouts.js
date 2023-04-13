const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

// to access app inside server.js we need to use express router
const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout (to create new one)
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

// at the end we need to export the router
module.exports = router