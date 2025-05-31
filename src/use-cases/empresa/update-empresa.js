export class UpdateEmpresaUseCase {
    constructor(updateEmpresaRepository) {
        this.updateEmpresaRepository = updateEmpresaRepository
    }

    async execute(empresaParams) {
        const empresa = {
            ...empresaParams,
            id: Number(empresaParams.id),
        }

        const updatedEmpresa =
            await this.updateEmpresaRepository.execute(empresa)

        return updatedEmpresa
    }
}
