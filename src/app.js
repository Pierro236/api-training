
import express from 'express'
import enceinteRoute from '../routes/enceintes'
import usersRoute from '../routes/users'
import bodyParser from "body-parser"

const app = express()

app.use(bodyParser.json());

// enceintes Routes
app.use('/enceintes', enceinteRoute)

app.use('/users', usersRoute )

// Home Route
app.get('/', async (req, res) => {
    res.send(
        "Welcome to My API"
    )
})





// app.get('/table', async (req, res) => {
//     let conn
//     try {
//         conn = await pool.getConnection()

//         let sql = `SHOW TABLES;`
//         let result = await conn.query(sql)
//         res.send(result)
        
//     } catch (error) {
//         res.status(500).json({
//             error
//         })
//     } finally {
//         if (conn) {
//             conn.release()
//         }
//     }
// })

const port = 3000

// Listening Server
app.listen(port, () => {
    console.log(`Server is up at port:${port}`)
})