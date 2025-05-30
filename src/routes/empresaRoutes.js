import { Router } from 'express'
import { makeCreateEmpresaController } from '../factories/controllers/empresa.js'

const router = Router()

router.post('/', async (req, res) => {
    const createEmpresaController = makeCreateEmpresaController()

    const { statusCode, body } = await createEmpresaController.execute(req)

    res.status(statusCode).json(body)
})

export default router
