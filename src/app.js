import express from 'express'
import empresaRoutes from './routes/empresaRoutes.js'

export const app = express()

app.use(express.json())

app.use('/', (req, res) => {
    res.send('Hello, World!')
})

app.use('/api', empresaRoutes)
