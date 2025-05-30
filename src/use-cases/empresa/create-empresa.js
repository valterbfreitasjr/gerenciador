export class CreateEmpresaUseCase {
    constructor(createEmpresaRepository) {
        this.createEmpresaRepository = createEmpresaRepository
    }

    async execute(params) {
        const createdEmpresa =
            await this.createEmpresaRepository.execute(params)

        return createdEmpresa
    }
}
