export class GetEmpresaUseCase {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository
    }

    async execute() {
        const empresas = await this.empresaRepository.getAllEmpresas()
        return empresas
    }
}
