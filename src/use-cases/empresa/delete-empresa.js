export class DeleteEmpresaUseCase {
    constructor(deleteEmpresaRepository) {
        this.deleteEmpresaRepository = deleteEmpresaRepository
    }

    async execute(empresaId) {
        const deletedEmpresa =
            await this.deleteEmpresaRepository.execute(empresaId)

        return deletedEmpresa
    }
}
