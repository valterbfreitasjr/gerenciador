import { CreateEmpresaController } from '../../controller/empresa/create-empresa.js'
import { CreateEmpresaRepository } from '../../repositories/empresa/create-empresa.js'
import { CreateEmpresaUseCase } from '../../use-cases/empresa/create-empresa.js'

export const makeCreateEmpresaController = () => {
    const createEmpresaRepository = new CreateEmpresaRepository()

    const createEmpresaUseCase = new CreateEmpresaUseCase(
        createEmpresaRepository,
    )

    const createEmpresaController = new CreateEmpresaController(
        createEmpresaUseCase,
    )

    return createEmpresaController
}
