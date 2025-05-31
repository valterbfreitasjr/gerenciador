import { EmpresaRequest } from '../../models/EmpresaRequest.js'
import { created } from '../helpers/http.js'

export class CreateEmpresaController {
    constructor(createEmpresaUseCase) {
        this.createEmpresaUseCase = createEmpresaUseCase
    }

    async execute(httpRequest, res) {
        try {
            const params = new EmpresaRequest(httpRequest.body)

            const createdEmpresa =
                await this.createEmpresaUseCase.execute(params)

            return created(createdEmpresa)
        } catch (error) {
            console.error(error)
            return {
                statusCode: error.statusCode || 500,
                body: { message: error.message || 'Internal Server Error' },
            }
        }
    }
}
