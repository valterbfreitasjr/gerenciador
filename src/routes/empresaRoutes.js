import { Router } from 'express'

const router = Router()

import { CreateEmpresaController } from '../controller/empresa/create-empresa.js'

router.post('/empresas', (req, res) => CreateEmpresaController.create(req, res))

export default router
