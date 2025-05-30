import express from 'express'
import cors from 'cors'
import empresaRouter from './routes/empresaRoutes.js'

export const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/empresas', empresaRouter)
