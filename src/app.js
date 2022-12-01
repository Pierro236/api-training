
import express from 'express'
import usersRoute from '../routes/users'
import bodyParser from "body-parser"

const app = express()

app.use(bodyParser.json());

// Users Route
app.use('/users', usersRoute )

// Home Route
app.get('/', async (req, res) => {
    res.send(
        "Welcome to My API"
    )
})


const port = 3000

// Listening Server
app.listen(port, () => {
    console.log(`Server is up at port:${port}`)
})
