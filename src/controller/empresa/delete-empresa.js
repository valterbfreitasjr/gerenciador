import { notFound, ok } from '../helpers/http.js'

export class DeleteEmpresaController {
    constructor(deleteEmpresaUseCase) {
        this.deleteEmpresaUseCase = deleteEmpresaUseCase
    }

    async execute(httpRequest) {
        try {
            const empresaId = httpRequest.params.id

            const deletedEmpresa =
                await this.deleteEmpresaUseCase.execute(empresaId)

            if (!deletedEmpresa) {
                return notFound({ message: 'Empresa não encontrada' })
            }

            return ok({ message: 'Empresa deletada com sucesso' })
        } catch (error) {
            console.error(error)
            throw new Error('Erro ao deletar empresa')
        }
    }
}
