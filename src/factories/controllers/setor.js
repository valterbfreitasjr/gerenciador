import { CreateSetorController } from '../../controller/setor/create-setor.js'
import { DeleteSetorController } from '../../controller/setor/delete-setor.js'
import { GetSetorByIdController } from '../../controller/setor/get-setor-by-id.js'
import { GetSetorController } from '../../controller/setor/get-setor.js'
import { UpdateSetorController } from '../../controller/setor/update-setor.js'

import { SetorRepository } from '../../repositories/setor/setor-repository.js'

import { CreateSetorUseCase } from '../../use-cases/setor/create-setor.js'
import { DeleteSetorUseCase } from '../../use-cases/setor/delete-setor.js'
import { GetSetorByIdUseCase } from '../../use-cases/setor/get-setor-by-id.js'
import { GetSetorUseCase } from '../../use-cases/setor/get-setor.js'
import { UpdateSetorUseCase } from '../../use-cases/setor/update-setor.js'

export const makeCreateSetorController = () => {
    const setorRepository = new SetorRepository()

    const createSetorUseCase = new CreateSetorUseCase(setorRepository)

    const createSetorController = new CreateSetorController(createSetorUseCase)

    return createSetorController
}

export const makeGetSetorController = () => {
    const setorRepository = new SetorRepository()

    const getSetorUseCase = new GetSetorUseCase(setorRepository)

    const getSetorController = new GetSetorController(getSetorUseCase)

    return getSetorController
}

export const makeDeleteSetorController = () => {
    const setorRepository = new SetorRepository()

    const deleteSetorUseCase = new DeleteSetorUseCase(setorRepository)

    const deleteSetorController = new DeleteSetorController(deleteSetorUseCase)

    return deleteSetorController
}

export const makeUpdateSetorController = () => {
    const setorRepository = new SetorRepository()

    const updateSetorUseCase = new UpdateSetorUseCase(setorRepository)

    const updateSetorController = new UpdateSetorController(updateSetorUseCase)

    return updateSetorController
}

export const makeGetSetorByIdController = () => {
    const setorRepository = new SetorRepository()

    const getSetorByIdUseCase = new GetSetorByIdUseCase(setorRepository)

    const getSetorByIdController = new GetSetorByIdController(
        getSetorByIdUseCase,
    )

    return getSetorByIdController
}
