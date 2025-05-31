import pool from '../../config/db.js'

export class EmpresaRepository {
    async createEmpresa(empresaParams) {
        const query = `
            INSERT INTO empresa (razao_social, nome_fantasia, cnpj)
            VALUES ($1, $2, $3)
            RETURNING *;
        `

        const values = [
            empresaParams.RazaoSocial,
            empresaParams.NomeFantasia,
            empresaParams.Cnpj,
        ]

        const result = await pool.query(query, values)
        return result.rows[0]
    }

    async executeEmpresaSetor(empresaId, listaIds) {
        if (!Array.isArray(listaIds) || listaIds.length === 0) {
            return
        }

        const query = `
            INSERT INTO empresa_setor (empresa_id, setor_id)
            VALUES ${listaIds.map((_, index) => `($1, $${index + 2})`).join(', ')}
            RETURNING *;
        `

        const values = [empresaId, ...listaIds]

        const result = await pool.query(query, values)
        return result.rows
    }

    async deleteEmpresa(empresaId) {
        const query = 'DELETE FROM empresa WHERE id = $1;'
        await pool.query(query, [empresaId])
    }

    async deleteEmpresaSetores(empresaId) {
        const query = 'DELETE FROM empresa_setor WHERE empresa_id = $1;'
        await pool.query(query, [empresaId])
    }

    async getEmpresaById(empresaId) {
        const query = 'SELECT * FROM empresa WHERE id = $1;'
        const { rows } = await pool.query(query, [empresaId])

        if (rows.length === 0) {
            throw new Error(`Empresa with ID ${empresaId} not found`)
        }

        const empresa = rows[0]

        const setores = await this.getSetoresByEmpresaId(empresaId)

        return {
            ...empresa,
            setores,
        }
    }

    async getAllEmpresas() {
        const query = `SELECT * FROM empresa;`
        const { rows: empresas } = await pool.query(query)

        const empresasComSetores = await Promise.all(
            empresas.map(async (empresa) => {
                const setores = await this.getSetoresByEmpresaId(empresa.id)
                return { ...empresa, setores }
            }),
        )

        return empresasComSetores
    }

    async getSetoresByEmpresaId(empresaId) {
        const query = `
            SELECT s.* FROM setor s
            INNER JOIN empresa_setor es ON es.setor_id = s.id
            WHERE es.empresa_id = $1;
        `

        const { rows } = await pool.query(query, [empresaId])
        return rows
    }

    async updateEmpresa(empresaParams) {
        const query = `
            UPDATE empresa
            SET razao_social = $1, nome_fantasia = $2, cnpj = $3
            WHERE id = $4
            RETURNING *;
        `
        const values = [
            empresaParams.RazaoSocial,
            empresaParams.NomeFantasia,
            empresaParams.Cnpj,
            empresaParams.Id,
        ]

        const { rows } = await pool.query(query, values)

        if (rows.length === 0) {
            throw new Error(`Empresa with ID ${empresa.id} not found`)
        }

        return rows[0]
    }
}
