import pool from '../src/db'

export const getUsers = async (req, res) => {
    let conn
    try {
        conn = await pool.getConnection()

        let sql = `SELECT * FROM users;`
        let result = await conn.query(sql)
        res.json(result)
        
    } catch (error) {
        res.status(500).json({
            error
        })
    } finally {
        if (conn) {
            conn.release()
        }
    }
}

export const getUser = async (req, res) => {
    let conn
    try {
        const userid = req.params.id
        conn = await pool.getConnection()
        let sql = `SELECT * FROM users WHERE id="${userid}";`
        let result = await conn.query(sql)
        res.json(result)
        
    } catch (error) {
        res.status(500).json({
            error
        })
    } finally {
        if (conn) {
            conn.release()
        }
    }
}

export const createUser = async (req, res) => {
    let conn
    try {
        const user = req.body
        conn = await pool.getConnection()
        let sql = `INSERT INTO users(Name) VALUE ("${user.Name}");`
        let result = await conn.query(sql)
        res.send(`The user ${user.Name} has been suceesfully added`)
        
    } catch (error) {
        res.status(500).json({
            error
        })
    } finally {
        if (conn) {
            conn.release()
        }
    }
}

export const deleteUser = async (req, res) => {
    let conn
    try {
        const user = req.body
        const userid = req.params.id
        conn = await pool.getConnection()
        let sql = `DELETE FROM users WHERE id="${userid}";`
        let result = await conn.query(sql)
        res.send(`The user with the id ${userid} has been suceesfully deleted`)
        
    } catch (error) {
        res.status(500).json({
            error
        })
    } finally {
        if (conn) {
            conn.release()
        }
    }
}

export const updateUser = async (req, res) => {
    let conn
    try {
        const userid = req.params.id
        const user = req.body
        conn = await pool.getConnection()
        let sql = `UPDATE users SET Name = "${user.Name}" WHERE id="${userid}";`
        let result = await conn.query(sql)
        res.send(`The user with the id ${userid} has been suceesfully updated `)
        
    } catch (error) {
        res.status(500).json({
            error
        })
    } finally {
        if (conn) {
            conn.release()
        }
    }
}