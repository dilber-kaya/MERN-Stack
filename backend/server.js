// to secure our sensitive data from public fields
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts.js')  // we need to make an access to our routes which are in a different file

// express app
const app = express()

// middleware
app.use(express.json()) // with this we can attcah the body(if we have) to the request 

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes (it attaches all of the routes to the app)
app.use('/api/workouts', workoutRoutes)

// connect to database
mongoose.connect(process.env.MONG_URI)
.then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port 4000')
    })
})
.catch((error) => {
    console.log(error)
})
