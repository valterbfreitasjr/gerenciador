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
                return {
                    statusCode: 404,
                    body: { message: 'Empresa não encontrada' },
                }
            }

            return { statusCode: 200, body: empresa }
        } catch (error) {
            console.error(error)
            return { status: 500, body: { message: 'Erro ao obter empresa' } }
        }
    }
}
