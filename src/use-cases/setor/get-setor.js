export class GetSetorUseCase {
    constructor(setorRepository) {
        this.setorRepository = setorRepository
    }

    async execute() {
        const setores = await this.setorRepository.getAllSetor()

        return setores
    }
}
