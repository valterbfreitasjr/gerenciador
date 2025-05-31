export class CreateEmpresaUseCase {
    constructor(empresaRepository, setorRepository) {
        this.empresaRepository = empresaRepository
        this.setorRepository = setorRepository
    }

    async execute(params) {
        const empresaExists = await this.empresaRepository.findEmpresaByCnpj(
            params.Cnpj,
        )

        if (empresaExists) {
            throw new Error(`Empresa com CNPJ ${params.Cnpj} já existe`)
        }

        const createdEmpresa =
            await this.empresaRepository.createEmpresa(params)

        const setoresEncontrados = await this.setorRepository.findSetoresByIds(
            params.ListaIds,
        )

        const setoresNaoEncontrados = params.ListaIds.filter(
            (id) => !setoresEncontrados.includes(id),
        )

        if (setoresNaoEncontrados.length > 0) {
            throw new Error(
                `Setores não encontrados: ${setoresNaoEncontrados.join(', ')}`,
            )
        }

        await this.empresaRepository.executeEmpresaSetor(
            createdEmpresa.id,
            params.ListaIds,
        )

        return createdEmpresa
    }
}
