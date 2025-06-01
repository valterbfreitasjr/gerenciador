import { EmpresaRequest } from '../../models/EmpresaRequest.js'
import { ok, serverError, badRequest } from '../helpers/http.js'

export class UpdateEmpresaController {
    constructor(updateEmpresaUseCase) {
        this.updateEmpresaUseCase = updateEmpresaUseCase
    }

    async execute(httpRequest, res) {
        try {
            const params = new EmpresaRequest(httpRequest.body)

            const updatedEmpresa =
                await this.updateEmpresaUseCase.execute(params)

            if (!updatedEmpresa) {
                return res.status(404).json({ message: 'Empresa not found' })
            }

            return ok(updatedEmpresa)
        } catch (error) {
            if (error instanceof Error) {
                return badRequest({
                    message: error.message,
                })
            }
            console.error(error)
            return serverError({ message: error.message })
        }
    }
}
