import 'dotenv/config.js' // Load environment variables from .env file
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
