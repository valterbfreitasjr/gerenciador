import { Router } from 'express'

import {
    makeCreateSetorController,
    makeDeleteSetorController,
    makeGetSetorController,
    makeUpdateSetorController,
} from '../factories/controllers/setor.js'

const setorRouter = Router()

setorRouter.post('/', async (req, res) => {
    const createSetorController = makeCreateSetorController()

    const { statusCode, body } = await createSetorController.execute(req)

    res.status(statusCode).json(body)
})

setorRouter.get('/', async (req, res) => {
    const getSetorController = makeGetSetorController()

    const { statusCode, body } = await getSetorController.execute(req)

    res.status(statusCode).json(body)
})

setorRouter.delete('/:id', async (req, res) => {
    const deleteSetorController = makeDeleteSetorController()

    const { statusCode, body } = await deleteSetorController.execute(req)

    res.status(statusCode).json(body)
})

setorRouter.patch('/', async (req, res) => {
    const updateSetorController = makeUpdateSetorController()

    const { statusCode, body } = await updateSetorController.execute(req)

    res.status(statusCode).json(body)
})

export default setorRouter
