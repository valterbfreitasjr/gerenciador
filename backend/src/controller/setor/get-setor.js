import { ok } from '../helpers/http.js'

export class GetSetorController {
    constructor(getSetorUseCase) {
        this.getSetorUseCase = getSetorUseCase
    }

    async execute() {
        try {
            const setores = await this.getSetorUseCase.execute()

            return ok(setores)
        } catch (error) {
            console.error('Error in GetSetorController:', error)
            throw new Error('Falha ao obter setores!')
        }
    }
}
