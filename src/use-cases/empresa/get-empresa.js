export class GetEmpresaUseCase {
    constructor(getEmpresaRepository) {
        this.getEmpresaRepository = getEmpresaRepository
    }

    async execute() {
        const empresas = await this.getEmpresaRepository.execute()
        return empresas
    }
}
