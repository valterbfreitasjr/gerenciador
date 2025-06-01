import { created, serverError } from '../helpers/http.js'

export class CreateSetorController {
    constructor(createSetorUseCase) {
        this.createSetorUseCase = createSetorUseCase
    }

    async execute(httpRequest) {
        try {
            const params = httpRequest.body

            const createdSetor = await this.createSetorUseCase.execute(params)

            return created(createdSetor)
        } catch (error) {
            return serverError({ message: 'Erro ao criar setor' })
        }
    }
}
