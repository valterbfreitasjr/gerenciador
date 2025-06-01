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
        cnpj = cnpj.replace(/[^\d]+/g, '')

        if (cnpj.length !== 14) return false

        // Elimina CNPJs com todos os dígitos iguais
        if (/^(\d)\1{13}$/.test(cnpj)) return false

        let tamanho = cnpj.length - 2
        let numeros = cnpj.substring(0, tamanho)
        let digitos = cnpj.substring(tamanho)
        let soma = 0
        let pos = tamanho - 7

        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--
            if (pos < 2) pos = 9
        }

        let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
        if (resultado != digitos.charAt(0)) return false

        tamanho = tamanho + 1
        numeros = cnpj.substring(0, tamanho)
        soma = 0
        pos = tamanho - 7

        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--
            if (pos < 2) pos = 9
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
        if (resultado != digitos.charAt(1)) return false

        return true
    }
}
