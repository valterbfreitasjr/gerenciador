import pool from '../../config/db.js'

export class UpdateEmpresaRepository {
    async execute(empresaParams) {
        const query = `
            UPDATE empresa
            SET razao_social = $1, nome_fantasia = $2, cnpj = $3
            WHERE id = $4
            RETURNING *;
        `
        const values = [
            empresaParams.razao_social,
            empresaParams.nome_fantasia,
            empresaParams.cnpj,
            empresaParams.id,
        ]

        const { rows } = await pool.query(query, values)

        if (rows.length === 0) {
            throw new Error(`Empresa with ID ${empresa.id} not found`)
        }

        return rows[0]
    }
}
