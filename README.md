# Projeto Imobiliária - Backend

Este repositório contém o código-fonte do backend do projeto, responsável pelas APIs, autenticação, manipulação do banco de dados e processamento dos dados.

---

## Como Executar

1. Navegue até a pasta do backend:
    ```bash
    cd ProjetoImoveisBackEnd
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure a variável de ambiente `.env` com a conexão ao banco, por exemplo:
    ```
    DATABASE_URL="mysql://usuario:senha@endereco:porta/nome_do_banco"
    JWT_SECRET="sua_chave_secreta"
    ```

4. Rode as migrações com Prisma (se estiver usando):
    ```bash
    npx prisma migrate dev
    ```

5. Inicie o servidor em modo de desenvolvimento:
    ```bash
    npm run dev
    ```

---

## Funcionalidades principais

- API REST para CRUD de imóveis e usuários
- Autenticação via JWT
- Upload seguro de imagens com Multer
- Controle de sessões e permissões

---

## Contato

Para dúvidas ou sugestões, entre em contato pelo GitHub: [Isaias-Henrique](https://github.com/Isaias-Henrique)

---
