export class CreateEmpresaUseCase {
    constructor(createEmpresaRepository) {
        this.createEmpresaRepository = createEmpresaRepository
    }

    async execute(params) {
        const empresaParams = {
            ...params,
            id: params.id,
        }

        const createdEmpresa = await this.createEmpresaRepository.execute(
            empresaParams
        )

        return createdEmpresa
    }
}
