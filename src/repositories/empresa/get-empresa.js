import pool from '../../config/db.js'

export class GetEmpresaRepository {
    async execute() {
        const query = `
            SELECT * FROM empresa;
        `

        const result = await pool.query(query)
        return result.rows
    }
}
