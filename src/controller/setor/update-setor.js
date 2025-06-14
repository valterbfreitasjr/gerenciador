import { notFound, ok, serverError } from '../helpers/http.js'

export class UpdateSetorController {
    constructor(updateSetorUseCase) {
        this.updateSetorUseCase = updateSetorUseCase
    }

    async execute(httpRequest) {
        try {
            const params = httpRequest.body

            const updatedSetor = await this.updateSetorUseCase.execute(params)

            if (!updatedSetor) {
                return notFound({ message: 'Setor não encontrado' })
            }

            return ok(updatedSetor)
        } catch (error) {
            return serverError({ message: 'Invalid Parameters!' })
        }
    }
}
