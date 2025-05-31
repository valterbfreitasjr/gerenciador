export class CreateSetorUseCase {
    constructor(setorRepository) {
        this.setorRepository = setorRepository
    }

    async execute(setorParams) {
        const createdSetor = await this.setorRepository.createSetor(setorParams)

        return createdSetor
    }
}
