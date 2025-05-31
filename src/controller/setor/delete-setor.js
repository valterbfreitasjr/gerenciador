export class DeleteSetorController {
    constructor(deleteSetorUseCase) {
        this.deleteSetorUseCase = deleteSetorUseCase
    }

    async execute(httpRequest) {
        try {
            const setorId = httpRequest.params.id

            const deletedSetor = await this.deleteSetorUseCase.execute(setorId)

            return {
                statusCode: 200,
                body: {
                    message: 'Setor deletado com sucesso',
                },
            }
        } catch (error) {
            console.error(error)
            throw new Error('Erro ao deletar setor')
        }
    }
}
