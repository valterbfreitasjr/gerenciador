import { notFound, serverError } from '../helpers/http.js'

export class GetEmpresaByIdController {
    constructor(getEmpresaByIdUseCase) {
        this.getEmpresaByIdUseCase = getEmpresaByIdUseCase
    }

    async execute(httpRequest) {
        try {
            const empresaId = httpRequest.params.id

            const empresa = await this.getEmpresaByIdUseCase.execute(
                Number(empresaId),
            )

            if (!empresa) {
                return notFound({ message: 'Empresa não encontrada' })
            }

            return { statusCode: 200, body: empresa }
        } catch (error) {
            console.error(error)
            return serverError({ message: 'Erro ao obter empresa' })
        }
    }
}
