import { EmpresaRequest } from '../../models/EmpresaRequest.js'
import { ok } from '../helpers/http.js'

export class UpdateEmpresaController {
    constructor(updateEmpresaUseCase) {
        this.updateEmpresaUseCase = updateEmpresaUseCase
    }

    async execute(httpRequest, res) {
        try {
            const params = new EmpresaRequest(httpRequest.body)

            const updatedEmpresa =
                await this.updateEmpresaUseCase.execute(params)

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
