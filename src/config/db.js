import 'dotenv/config.js'
import pkg from 'pg'

const { Pool } = pkg

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'password',
    database: 'empresaapp',
})

export default pool
