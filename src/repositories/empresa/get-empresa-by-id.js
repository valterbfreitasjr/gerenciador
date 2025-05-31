import pool from '../../config/db.js'

export class GetEmpresaByIdRepository {
    async execute(empresaId) {
        const query = 'SELECT * FROM empresa WHERE id = $1;'
        const { rows } = await pool.query(query, [empresaId])

        if (rows.length === 0) {
            throw new Error(`Empresa with ID ${empresaId} not found`)
        }

        return rows[0]
    }
}
