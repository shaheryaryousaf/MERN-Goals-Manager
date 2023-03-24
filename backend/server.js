const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express();

app.use('/api/goals', require('./routes/goalsRoutes'))

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))