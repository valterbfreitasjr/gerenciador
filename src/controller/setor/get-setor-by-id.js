import { ok, serverError } from '../helpers/http.js'

export class GetSetorByIdController {
    constructor(getSetorByIdUseCase) {
        this.getSetorByIdUseCase = getSetorByIdUseCase
    }

    async execute(httpRequest) {
        try {
            const { setorId } = httpRequest.params

            const setor = await this.getSetorByIdUseCase.execute(setorId)

            return ok(setor)
        } catch (error) {
            return serverError()
        }
    }
}
