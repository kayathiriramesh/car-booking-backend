const express = require('express')
const app = express()
const port =  5000
const dbConnection = require('./db')
const cors = require("cors")
app.use(express.json())
app.use(cors())


app.use('/cars/', require('./routes/carsRoute'))
app.use('/users/', require('./routes/usersRoute'))
app.use('/bookings/', require('./routes/bookingsRoute'))

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Node JS Server Started in the Port ${port}`))