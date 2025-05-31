export class EmpresaRequest {
    constructor({ RazaoSocial, NomeFantasia, Cnpj, ListaIds, Id }) {
        if (!RazaoSocial || typeof RazaoSocial !== 'string') {
            throw new Error('RazaoSocial é obrigatório e deve ser uma string')
        }

        if (!NomeFantasia || typeof NomeFantasia !== 'string') {
            throw new Error('NomeFantasia é obrigatório e deve ser uma string')
        }

        if (!Cnpj || typeof Cnpj !== 'string') {
            throw new Error('Cnpj é obrigatório e deve ser uma string')
        }

        if (
            !Array.isArray(ListaIds) ||
            !ListaIds.every((id) => Number.isInteger(id))
        ) {
            throw new Error(
                'ListaIds é obrigatório e deve ser uma lista de inteiros',
            )
        }

        this.RazaoSocial = RazaoSocial
        this.NomeFantasia = NomeFantasia
        this.Cnpj = Cnpj
        this.ListaIds = ListaIds
        this.Id = Id
    }
}
