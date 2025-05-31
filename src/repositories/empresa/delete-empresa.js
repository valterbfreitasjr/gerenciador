import pool from '../../config/db.js'

export class DeleteEmpresaRepository {
    async execute(empresaId) {
        const query = 'DELETE FROM empresa WHERE id = $1;'
        await pool.query(query, [empresaId])
    }
}
