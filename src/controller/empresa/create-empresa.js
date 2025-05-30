import { created } from '../helpers/http.js'

export class CreateEmpresaController {
    constructor(createEmpresaUseCase) {
        this.createEmpresaUseCase = createEmpresaUseCase
    }

    async execute(httpRequest) {
        try {
            const params = httpRequest.body

            const createdEmpresa =
                await this.createEmpresaUseCase.execute(params)

            return created(createdEmpresa)
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Erro ao criar empresa' })
        }
    }
}
