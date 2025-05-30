export class CreateSetorController {
    constructor(createSetorUseCase) {
        this.createSetorUseCase = createSetorUseCase
    }

    async execute(httpRequest) {
        try {
            const params = httpRequest.body

            const createSetor = await this.createSetorUseCase.execute(params)

            return created(createSetor)
        } catch (error) {
            return {
                statusCode: 500,
                body: {
                    error: 'Internal Server Error',
                },
            }
        }
    }
}
