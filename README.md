# 🚀 KanBan-ToDoList

Um sistema completo de gestão de tarefas no estilo KanBan, com funcionalidades de autenticação, criação, visualização, edição e exclusão de tarefas. Desenvolvido com uma arquitetura robusta de backend em Node.js com TypeScript e Express, utilizando Prisma ORM para interação com PostgreSQL, e um frontend moderno em React.js.

## 🔗 Live Demo

Experimente o KanBan-ToDoList ao vivo!

➡️ **Acesse aqui**: [https://kan-ban-to-do-list.vercel.app/](https://kan-ban-to-do-list.vercel.app/)

## 🌟 Funcionalidades

- **Autenticação de Usuário**: Cadastro e login seguros com JWT (JSON Web Tokens).
- **Gestão de Tarefas (CRUD)**:
  - Crie novas tarefas associadas ao seu usuário.
  - Visualize todas as suas tarefas.
  - Edite detalhes de tarefas existentes (título, descrição, relevância, status).
  - Exclua tarefas.
- **KanBan Board**: Organize suas tarefas por status (ex: "A Fazer", "Em Andamento", "Concluído").
- **Validação de Dados**: Utiliza Yup para garantir a integridade dos dados de entrada.
- **Estrutura de Projeto Limpa**: Organização modular com uso de serviços, repositórios e controllers.

## 🛠️ Tecnologias Utilizadas

### Backend (Node.js, TypeScript, Express)

- **Node.js**: Ambiente de execução.
- **TypeScript**: Linguagem de programação para maior tipagem e escalabilidade.
- **Express.js**: Framework web para construção de APIs RESTful.
- **Prisma ORM**: ORM moderno para interação com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **JWT (JSON Web Tokens)**: Para autenticação e autorização seguras.
- **Dotenv**: Para gerenciamento de variáveis de ambiente.
- **Cors**: Para lidar com requisições de diferentes origens.
- **Yup**: Para validação de esquemas de dados.
- **Tsconfig-paths**: Para resolução de aliases de módulos em tempo de execução.

### Frontend (React.js)

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- (Adicione aqui outras tecnologias específicas do Frontend, ex: Axios para requisições HTTP, React Router para navegação, Tailwind CSS/Styled Components para estilização, Context API/Redux para gerenciamento de estado, etc.)

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

## Pré-requisitos

- **Node.js** (versão 20 ou superior recomendada)
- **npm** ou **Yarn**
- **Docker Desktop** instalado e configurado (necessário para rodar o contêiner PostgreSQL)
- **Git**

## 1. Clonar o Repositório

```bash
git clone https://github.com/Dylan-208/KanBan-ToDoList.git
cd KanBan-ToDoList
```

## 2. Configurar o Backend

Navegue até a pasta backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
# ou yarn install
```

Crie o arquivo de variáveis de ambiente:
Crie um arquivo `.env` na raiz da pasta `backend` com as seguintes variáveis:

```
DATABASE_URL="postgresql://kanban_user:kanban_password@localhost:5432/kanban_db?schema=public"
JWT_SECRET="sua_chave_secreta_jwt_aqui"
PORT=3000
```

Substitua `sua_chave_secreta_jwt_aqui` por uma string aleatória e complexa. O `DATABASE_URL` acima assume que você usará o contêiner PostgreSQL configurado via Docker Desktop, conforme detalhado abaixo.

## 3. Configurar o Banco de Dados com Docker Desktop

Certifique-se de que o **Docker Desktop** está instalado e rodando em sua máquina.

### Usando Docker Compose (Recomendado)

Na raiz do projeto, deve haver um arquivo `docker-compose.yml`. Caso ele não exista, crie um com o seguinte conteúdo para configurar o PostgreSQL:

```yaml
version: "3.8"
services:
  db:
    image: postgres:latest
    restart: always
    environment:
      POSTGRES_USER: kanban_user
      POSTGRES_PASSWORD: kanban_password
      POSTGRES_DB: kanban_db
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

Salve este arquivo como `docker-compose.yml` na raiz do projeto.

Suba o serviço de banco de dados com o Docker Desktop:

```bash
docker-compose up -d db
```

Isso iniciará um contêiner PostgreSQL. O Docker Desktop gerenciará o contêiner, e você pode visualizá-lo na interface do Docker Desktop. Certifique-se de que o `DATABASE_URL` no arquivo `.env` do backend corresponde às credenciais definidas no `docker-compose.yml` (ex: `postgresql://kanban_user:kanban_password@localhost:5432/kanban_db?schema=public`).

## 4. Rodar Migrações do PrismaEXPOSED

Prisma
Volte para a pasta `backend` e execute as migrações para criar o esquema do banco de dados:

```bash
cd backend
npx prisma migrate dev --name init
```

O `--name init` é apenas o nome da sua primeira migração.

## 5. Gerar Prisma Client

(Isso deve ser feito automaticamente pelo `postinstall`, mas execute para garantir)

```bash
npx prisma generate
```

## 6. Iniciar o Backend

```bash
npm run dev
# ou yarn dev
```

O backend estará rodando em `http://localhost:3000` (ou na porta definida em seu `.env`).

### 3. Configurar o Frontend

Navegue até a pasta `FrontEnd`:

```bash
cd ../FrontEnd
```

Instale as dependências:

```bash
npm install
# ou yarn install
```

Crie o arquivo de variáveis de ambiente:
Crie um arquivo `.env` na raiz da pasta `FrontEnd` e adicione a URL do seu backend local:

```
VITE_APP_API_URL=http://localhost:3000
```

Substitua a URL se seu backend estiver rodando em uma porta diferente.

Iniciar o Frontend:

```bash
npm start
# ou yarn start
```

O frontend estará acessível em `http://localhost:3001` (ou na porta padrão do React App).

## ☁️ Deploy do Projeto

Este projeto está com deploy completo e disponível online!

### Frontend Deploy

O frontend está deployado na **Vercel**.

**URL**: [https://kan-ban-to-do-list.vercel.app/](https://kan-ban-to-do-list.vercel.app/)

**Configuração na Vercel**:

- **Root Directory**: `FrontEnd`
- **Variável de Ambiente**: `VITE_APP_API_URL` (apontando para a URL pública do backend no Render).

### Backend Deploy

O backend está deployado no **Render.com**.

**Configuração no Render**:

- **Tipo de Serviço**: Web Service (sem Dockerfile).
- **Root Directory**: `backend`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npx prisma migrate deploy && node -r tsconfig-paths/register dist/server.js`
- **Variáveis de Ambiente**: `DATABASE_URL` (conectando ao PostgreSQL do Render), `JWT_SECRET`, `NODE_ENV=production`.
- **Banco de Dados**: PostgreSQL hospedado também no Render.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

