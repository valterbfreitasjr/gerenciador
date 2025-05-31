export class GetEmpresaByIdUseCase {
    constructor(getEmpresaByIdRepository) {
        this.getEmpresaByIdRepository = getEmpresaByIdRepository
    }

    async execute(empresaId) {
        console.log(typeof empresaId)
        const empresa = await this.getEmpresaByIdRepository.execute(empresaId)

        if (!empresa) {
            return null
        }

        return empresa
    }
}
