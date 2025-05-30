export class CreateEmpresaController {
    constructor(createEmpresaUseCase) {
        this.createEmpresaUseCase = createEmpresaUseCase
    }

    async execute(req, res) {
        try {
            // const { razao_social, nome_fantasia, cnpj } = req.body

            // const empresa = await createEmpresaUseCase.execute({
            //     razao_social,
            //     nome_fantasia,
            //     cnpj,
            // })

            res.status(201).json(empresa).message('Empresa criada com sucesso')
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Erro ao criar empresa' })
        }
    }
}
