import pg from '../../config/db.js'

export class CreateEmpresaRepository {
    // criar uma query sql onde crie uma empresa com id, razao social, nome fantasia e cnpj
    async execute(createEmpresaParams) {
        const query = `
            INSERT INTO empresa (razao_social, nome_fantasia, cnpj)
            VALUES ($1, $2, $3)
            RETURNING *;
        `

        const values = [
            createEmpresaParams.razao_social,
            createEmpresaParams.nome_fantasia,
            createEmpresaParams.cnpj,
        ]

        const result = await pg.query(query, values)
        return result.rows[0]
    }
}
