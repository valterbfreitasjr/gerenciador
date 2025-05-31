import pool from '../../config/db.js'

export class SetorRepository {
    async createSetor(setorParams) {
        const query = `
            INSERT INTO setor (descricao)
            VALUES ($1)
            RETURNING *;
        `

        const values = [setorParams.descricao]

        const result = await pool.query(query, values)
        return result.rows[0]
    }

    async deleteSetor(setorId) {
        const query = 'DELETE FROM setor WHERE id = $1;'
        const affectedtRows = await pool.query(query, [setorId])
        return affectedtRows.rowCount
    }

    async getSetorById(setorId) {
        const query = 'SELECT * FROM setor WHERE id = $1;'
        const { rows } = await pool.query(query, [setorId])

        if (rows.length === 0) {
            throw new Error(`Setor with ID ${setorId} not found`)
        }

        const setor = rows[0]

        return setor
    }

    async getAllSetor() {
        const query = `
            SELECT * FROM setor;
        `

        const result = await pool.query(query)
        return result.rows
    }

    async updateSetor(setorParams) {
        const query = `
            UPDATE setor
            SET descricao = $1
            WHERE id = $2
            RETURNING *;
        `
        const values = [setorParams.descricao, setorParams.id]

        const { rows } = await pool.query(query, values)

        return rows[0]
    }

    async findSetoresByIds(listaIds) {
        const query = `
            SELECT id FROM setor WHERE id = ANY($1);
        `
        const values = [listaIds]

        const result = await pool.query(query, values)
        return result.rows.map((row) => row.id)
    }
}
