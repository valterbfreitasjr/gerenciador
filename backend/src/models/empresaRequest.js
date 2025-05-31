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

        if (!this.isValidCNPJ(Cnpj)) {
            throw new Error('Cnpj inválido')
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

    isValidCNPJ(cnpj) {
        cnpj = cnpj.replace(/[^\d]/g, '')
        // Remove non-numeric characters
        if (cnpj.length !== 14) {
            return false // CNPJ must have 14 digits
        }

        const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/
        return cnpjRegex.test(cnpj)
    }
}
