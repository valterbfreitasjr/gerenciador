export class GetEmpresaByIdUseCase {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository
    }

    async execute(empresaId) {
        console.log(typeof empresaId)
        const empresa = await this.empresaRepository.getEmpresaById(empresaId)

        if (!empresa) {
            return null
        }

        return empresa
    }
}
