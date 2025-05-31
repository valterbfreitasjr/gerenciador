export class DeleteEmpresaUseCase {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository
    }

    async execute(empresaId) {
        const deletedEmpresa =
            await this.empresaRepository.deleteEmpresa(empresaId)

        return deletedEmpresa
    }
}
