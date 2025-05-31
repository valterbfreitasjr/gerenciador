import { ok } from '../helpers/http.js'

export class GetEmpresaController {
    constructor(getEmpresaUseCase) {
        this.getEmpresaUseCase = getEmpresaUseCase
    }

    async execute() {
        try {
            const empresas = await this.getEmpresaUseCase.execute()

            return ok(empresas)
        } catch (error) {
            console.error(error)
            throw new Error('Erro ao obter empresas')
        }
    }
}
