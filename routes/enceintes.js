import express from 'express'
import pool from '../src/db'

const router = express.Router();

router.get('/', async (req, res) => {
    let conn
    try {
        conn = await pool.getConnection()

        let sql = `SELECT * FROM modele;`
        let result = await conn.query(sql)
        res.send(result)
        
    } catch (error) {
        res.status(500).json({
            error
        })
    } finally {
        if (conn) {
            conn.release()
        }
    }
})


export default router;