export class GetSetorByIdUseCase {
    constructor(setorRepository) {
        this.setorRepository = setorRepository
    }

    async execute(setorId) {
        const setores = await this.setorRepository.getSetorById(setorId)
        if (!setores || setores.length === 0) {
            return []
        }

        return setores
    }
}
