import { ok } from '../helpers/http.js'

export class UpdateEmpresaController {
    constructor(updateEmpresaUseCase) {
        this.updateEmpresaUseCase = updateEmpresaUseCase
    }

    async execute(httpRequest) {
        try {
            const empresaParams = httpRequest.body

            const updatedEmpresa =
                await this.updateEmpresaUseCase.execute(empresaParams)

            return ok(updatedEmpresa)
        } catch (error) {
            console.error(error)
            return {
                statusCode: 500,
                body: { message: 'Erro ao atualizar empresa' },
            }
        }
    }
}
