const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path')

const quizzes = require('./routes/api/quizzes')

const app = express()
app.use(cors())
// Body parser midddleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Use Routes

app.use('/api/tests', quizzes)

const port = 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
