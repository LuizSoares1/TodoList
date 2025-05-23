# TODO App - Teste Prático

## Visão Geral
Este é um sistema de gestão de tarefas (Todo List) desenvolvido como teste prático para desenvolvedores. O sistema inclui um backend em Node.js, frontend em React, banco de dados MongoDB e está preparado para containerização com Docker.

## Requisitos

- Node.js 18+
- Docker e Docker Compose
- MongoDB (ou usar via Docker)
- Git

## Instalação Local

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

### Docker

```bash
docker-compose up --build
```

### A aplicação estará disponível em:

- **Frontend:** [http://localhost](http://localhost)
- **Backend:** [http://localhost:3001](http://localhost:3001)
- **MongoDB:** `mongodb://localhost:27017`

## Testes

### Backend

```bash
cd backend
npm test
```

### Frontend

```bash
cd frontend
npm test
```

## Variáveis de Ambiente

### Backend

- `MONGODB_URI`: URL de conexão do MongoDB
- `PORT`: Porta do servidor (padrão: 3001)

### Frontend

- `REACT_APP_API_URL`: URL da API backend

## Problemas Conhecidos

- Configuração CORS para produção
- Variáveis de ambiente não configuradas
- Autenticação MongoDB
- Build do frontend para produção
- Configuração Nginx

## Autor

Desenvolvido para teste prático de contratação.
