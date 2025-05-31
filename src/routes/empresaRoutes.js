import { Router } from 'express'
import {
    makeCreateEmpresaController,
    makeDeleteEmpresaController,
    makeGetEmpresaByIdController,
    makeGetEmpresaController,
    makeUpdateEmpresaController,
} from '../factories/controllers/empresa.js'

const router = Router()

router.post('/', async (req, res) => {
    const createEmpresaController = makeCreateEmpresaController()

    const { statusCode, body } = await createEmpresaController.execute(req)

    res.status(statusCode).json(body)
})

router.delete('/:id', async (req, res) => {
    const deleteEmpresaController = makeDeleteEmpresaController()

    const { statusCode, body } = await deleteEmpresaController.execute(req)

    res.status(statusCode).json(body)
})

router.get('/', async (req, res) => {
    const getEmpresaController = makeGetEmpresaController()

    const { statusCode, body } = await getEmpresaController.execute(req)

    res.status(statusCode).json(body)
})

router.get('/:id', async (req, res) => {
    const getEmpresaByIdController = makeGetEmpresaByIdController()

    const { statusCode, body } = await getEmpresaByIdController.execute(req)

    res.status(statusCode).json(body)
})

router.patch('/', async (req, res) => {
    const updateEmpresaByIdController = makeUpdateEmpresaController()

    const { statusCode, body } = await updateEmpresaByIdController.execute(req)

    res.status(statusCode).json(body)
})

export default router
