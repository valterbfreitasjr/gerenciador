# 📊 Gerenciador de Empresas e Setores - Backend

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)  
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)  
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)  
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## 📝 Descrição

Este é o backend de um **Gerenciador de Empresas e Setores**, desenvolvido com **Node.js** e **JavaScript**, utilizando **PostgreSQL** como banco de dados. O projeto conta com um ambiente totalmente conteinerizado através do **Docker**, incluindo o banco de dados e uma interface gráfica de administração via **phpPgAdmin**.
- Esse projeto se trata do backend do Gerenciador de Empresas e Setores, baixe o frontend no repositório: https://github.com/valterbfreitasjr/gerenciador_frontend

---

## 🚀 Tecnologias

- **Node.js** — Ambiente de execução JavaScript.
- **Express.js** — Framework minimalista para criação da API.
- **PostgreSQL** — Banco de dados relacional.
- **Docker & Docker Compose** — Conteinerização e orquestração de serviços.
- **phpPgAdmin** — Interface gráfica para administração do banco.

---

## ⚙️ Funcionalidades

- ✅ CRUD de **Empresas**.
- ✅ CRUD de **Setores**.
- ✅ Relacionamento entre empresas e setores.
- ✅ Ambiente conteinerizado com **Docker**.
- ✅ Acesso e gerenciamento do banco via **phpPgAdmin**.

---

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/valterbfreitasjr/gerenciador.git
cd gerenciador
```
Variáveis .env (já seguem configuradas):

- POSTGRES_USER="root"
- POSTGRES_PASSWORD="password"
- POSTGRES_PORT=5432
- POSTGRES_DB="empresaapp"
- POSTGRES_HOST="localhost"
- PORT=3000
- DATABASE_URL= "postgresql://root:password@localhost:5432/empresaapp"

Execute o comando no terminal para subir os containers:
```bash
docker-compose up -d
```
---
### Banco de dados PostgreSQL.

- Interface phpPgAdmin para gerenciamento.
- Serviços integrados via rede Docker.

A API estará disponível em:
➡️ http://localhost:3000

A interface phpPgAdmin estará em:
➡️ http://localhost:8000

Login do phpPgAdmin:
- Login: admin@admin.com
- Senha: admin

### Startando o projeto

| Script          | Descrição                                 |
| --------------- | ----------------------------------------- |
| `npm install`   | Instala as dependências                   |
| `npm run start` | Inicia a aplicação                        |

### Endpoints

| Método | Rota                 | Descrição                   |
| ------ | -------------------- | --------------------------- |
| GET    | `/api/empresas`      | Lista todas as empresas     |
| POST   | `/api/empresas`      | Cria uma nova empresa       |
| PATCH  | `/api/empresas`      | Atualiza uma empresa        |
| DELETE | `/api/empresas/:id`  | Remove uma empresa          |
| GET    | `/api/setores`       | Lista todos os setores      |
| POST   | `/api/setores`       | Cria um novo setor          |
| PATCH  | `/api/setores`       | Atualiza um setor existente |
| DELETE | `/api/setores/:id`   | Remove um setor             |

### 🗃️ Banco de Dados
PostgreSQL como sistema gerenciador.

Acesso via phpPgAdmin: http://localhost:8000

Configuração do banco via .env e docker-compose.yml

---
### Script para criação das tabelas

- Primiero passo, acesse o PgAdmin via http://localhost:8000 com as seguintes credenciais:
- Login: admin@admin.com
- Senha: admin

Passo a passo:
- Click com o botão direto em Server > Register > Server
  
![image](https://github.com/user-attachments/assets/3c40ea88-5ed0-4ca4-90cd-6ab4ca49116e)

![image](https://github.com/user-attachments/assets/67124f3c-de76-4622-a100-fe1b2a154756)
- Hostname: informe o IP da máquina onde se encontra o banco de dados.
- Username: root
- Password: password
- Username e Password para acesso ao banco de dados.

Para verificar os dados de acesso, é possível visualizar no arquivo "docker-compose.yml"

### Abra o terminal do pgadmin seguindo o caminho:

![image](https://github.com/user-attachments/assets/c22cbab8-ff02-4ffb-845c-9a460ab9c0fa)

### Execute a seguinte query para criação das tabelas:
```bash
CREATE TABLE empresa (
    id SERIAL PRIMARY KEY,
    razao_social VARCHAR NOT NULL,
    nome_fantasia VARCHAR,
    cnpj VARCHAR NOT NULL
);

CREATE TABLE setor (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR NOT NULL
);

CREATE TABLE empresa_setor (
    empresa_id INT NOT NULL,
    setor_id INT NOT NULL,
    PRIMARY KEY (empresa_id, setor_id),
    FOREIGN KEY (empresa_id) REFERENCES empresa(id) ON DELETE CASCADE,
    FOREIGN KEY (setor_id) REFERENCES setor(id) ON DELETE CASCADE
);
```

Pronto, o seu banco de dados está preparado para receber os dados enviados pelos usuários.

---
 👨‍💻 Autor:
Valter B. Freitas Jr

⭐️ Deixe uma estrela
Se achou este projeto útil, não esqueça de deixar uma ⭐️ no repositório!
