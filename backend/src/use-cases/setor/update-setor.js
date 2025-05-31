export class UpdateSetorUseCase {
    constructor(setorRepository) {
        this.setorRepository = setorRepository
    }

    async execute(setorParams) {
        const setor = {
            ...setorParams,
            id: Number(setorParams.id),
        }

        const updatedSetor = await this.setorRepository.updateSetor(setor)

        return updatedSetor
    }
}
