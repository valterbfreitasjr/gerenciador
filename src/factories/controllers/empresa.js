import { CreateEmpresaController } from '../../controller/empresa/create-empresa.js'
import { GetEmpresaController } from '../../controller/empresa/get-empresa.js'
import { DeleteEmpresaController } from '../../controller/empresa/delete-empresa.js'

import { CreateEmpresaRepository } from '../../repositories/empresa/create-empresa.js'
import { DeleteEmpresaRepository } from '../../repositories/empresa/delete-empresa.js'
import { GetEmpresaRepository } from '../../repositories/empresa/get-empresa.js'

import { CreateEmpresaUseCase } from '../../use-cases/empresa/create-empresa.js'
import { GetEmpresaUseCase } from '../../use-cases/empresa/get-empresa.js'
import { DeleteEmpresaUseCase } from '../../use-cases/empresa/delete-empresa.js'
import { GetEmpresaByIdRepository } from '../../repositories/empresa/get-empresa-by-id.js'
import { GetEmpresaByIdUseCase } from '../../use-cases/empresa/get-empresa-by-id.js'
import { GetEmpresaByIdController } from '../../controller/empresa/get-empresa-by-id.js'
import { UpdateEmpresaRepository } from '../../repositories/empresa/update-empresa.js'
import { UpdateEmpresaUseCase } from '../../use-cases/empresa/update-empresa.js'
import { UpdateEmpresaController } from '../../controller/empresa/update-empresa.js'

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

export const makeDeleteEmpresaController = () => {
    const deleteEmpresaRepository = new DeleteEmpresaRepository()

    const deleteEmpresaUseCase = new DeleteEmpresaUseCase(
        deleteEmpresaRepository,
    )

    const deleteEmpresaController = new DeleteEmpresaController(
        deleteEmpresaUseCase,
    )

    return deleteEmpresaController
}

export const makeGetEmpresaController = () => {
    const getEmpresaRepository = new GetEmpresaRepository()

    const getEmpresaUseCase = new GetEmpresaUseCase(getEmpresaRepository)

    const getEmpresaController = new GetEmpresaController(getEmpresaUseCase)

    return getEmpresaController
}

export const makeGetEmpresaByIdController = () => {
    const getEmpresaByIdRepository = new GetEmpresaByIdRepository()

    const getEmpresaByIdUseCase = new GetEmpresaByIdUseCase(
        getEmpresaByIdRepository,
    )

    const getEmpresaByIdController = new GetEmpresaByIdController(
        getEmpresaByIdUseCase,
    )

    return getEmpresaByIdController
}

export const makeUpdateEmpresaController = () => {
    const updateEmpresaRepository = new UpdateEmpresaRepository()

    const updateEmpresaUseCase = new UpdateEmpresaUseCase(
        updateEmpresaRepository,
    )

    const updateEmpresaController = new UpdateEmpresaController(
        updateEmpresaUseCase,
    )

    return updateEmpresaController
}
