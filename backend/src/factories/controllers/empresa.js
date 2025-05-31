import { CreateEmpresaController } from '../../controller/empresa/create-empresa.js'
import { GetEmpresaController } from '../../controller/empresa/get-empresa.js'
import { DeleteEmpresaController } from '../../controller/empresa/delete-empresa.js'
import { GetEmpresaByIdController } from '../../controller/empresa/get-empresa-by-id.js'
import { UpdateEmpresaController } from '../../controller/empresa/update-empresa.js'

import { EmpresaRepository } from '../../repositories/empresa/empresa-repository.js'
import { SetorRepository } from '../../repositories/setor/setor-repository.js'

import { CreateEmpresaUseCase } from '../../use-cases/empresa/create-empresa.js'
import { GetEmpresaUseCase } from '../../use-cases/empresa/get-empresa.js'
import { DeleteEmpresaUseCase } from '../../use-cases/empresa/delete-empresa.js'
import { GetEmpresaByIdUseCase } from '../../use-cases/empresa/get-empresa-by-id.js'
import { UpdateEmpresaUseCase } from '../../use-cases/empresa/update-empresa.js'

export const makeCreateEmpresaController = () => {
    const empresaRepository = new EmpresaRepository()
    const setorRepository = new SetorRepository()

    const createEmpresaUseCase = new CreateEmpresaUseCase(
        empresaRepository,
        setorRepository,
    )

    const createEmpresaController = new CreateEmpresaController(
        createEmpresaUseCase,
    )

    return createEmpresaController
}

export const makeDeleteEmpresaController = () => {
    const empresaRepository = new EmpresaRepository()

    const deleteEmpresaUseCase = new DeleteEmpresaUseCase(empresaRepository)

    const deleteEmpresaController = new DeleteEmpresaController(
        deleteEmpresaUseCase,
    )

    return deleteEmpresaController
}

export const makeGetEmpresaController = () => {
    const empresaRepository = new EmpresaRepository()

    const getEmpresaUseCase = new GetEmpresaUseCase(empresaRepository)

    const getEmpresaController = new GetEmpresaController(getEmpresaUseCase)

    return getEmpresaController
}

export const makeGetEmpresaByIdController = () => {
    const empresaRepository = new EmpresaRepository()

    const getEmpresaByIdUseCase = new GetEmpresaByIdUseCase(empresaRepository)

    const getEmpresaByIdController = new GetEmpresaByIdController(
        getEmpresaByIdUseCase,
    )

    return getEmpresaByIdController
}

export const makeUpdateEmpresaController = () => {
    const empresaRepository = new EmpresaRepository()
    const setorRepository = new SetorRepository()

    const updateEmpresaUseCase = new UpdateEmpresaUseCase(
        empresaRepository,
        setorRepository,
    )

    const updateEmpresaController = new UpdateEmpresaController(
        updateEmpresaUseCase,
    )

    return updateEmpresaController
}
