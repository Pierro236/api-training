import mariadb from 'mariadb'

const pool = mariadb.createPool({
    host: 'mariadb',
    user: 'root',
    password: 'password',
    database: 'testuser'
})

export default pool
