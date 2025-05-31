export class UpdateEmpresaUseCase {
    constructor(empresaRepository, setorRepository) {
        this.empresaRepository = empresaRepository
        this.setorRepository = setorRepository
    }

    async execute(empresaParams) {
        const empresaId = Number(empresaParams.Id)

        const empresaExistente =
            await this.empresaRepository.getEmpresaById(empresaId)
        if (!empresaExistente) {
            throw new Error(`Empresa com ID ${empresaId} não encontrada`)
        }

        if (empresaParams.ListaIds && empresaParams.ListaIds.length > 0) {
            // Busca setores existentes
            const setoresEncontrados =
                await this.setorRepository.findSetoresByIds(
                    empresaParams.ListaIds,
                )

            const setoresNaoEncontrados = empresaParams.ListaIds.filter(
                (id) => !setoresEncontrados.includes(id),
            )

            if (setoresNaoEncontrados.length > 0) {
                throw new Error(
                    `Setores não encontrados: ${setoresNaoEncontrados.join(', ')}`,
                )
            }

            await this.empresaRepository.deleteEmpresaSetores(empresaId)

            await this.empresaRepository.executeEmpresaSetor(
                empresaId,
                empresaParams.ListaIds,
            )
        }

        const empresaAtualizada = await this.empresaRepository.updateEmpresa({
            ...empresaParams,
            id: empresaId,
        })

        const empresaComSetores =
            await this.empresaRepository.getEmpresaById(empresaId)

        return empresaComSetores
    }
}
