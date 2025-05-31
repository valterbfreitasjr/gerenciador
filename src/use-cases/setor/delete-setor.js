export class DeleteSetorUseCase {
    constructor(setorRepository) {
        this.setorRepository = setorRepository
    }

    async execute(setorId) {
        const deletedSetor = await this.setorRepository.deleteSetor(setorId)

        return deletedSetor
    }
}
