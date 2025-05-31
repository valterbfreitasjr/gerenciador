import express from 'express'
import cors from 'cors'
import empresaRouter from './routes/empresaRoutes.js'
import setorRouter from './routes/setorRoutes.js'

export const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/empresas', empresaRouter)
app.use('/api/setores', setorRouter)
