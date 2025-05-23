<h1>TODO App - Teste Prático</h1>

    <h2>Visão Geral</h2>
    <p>Este é um sistema de gestão de tarefas (Todo List) desenvolvido como teste prático para desenvolvedores. O sistema inclui um backend em Node.js, frontend em React, banco de dados MongoDB e está preparado para containerização com Docker.</p>

    <h2>Requisitos</h2>
    <ul>
        <li>Node.js 18+</li>
        <li>Docker e Docker Compose</li>
        <li>MongoDB (ou usar via Docker)</li>
        <li>Git</li>
    </ul>

    <h2>Instalação Local</h2>

    <h3>Backend</h3>
    <pre><code>cd backend
npm install
npm run dev</code></pre>

    <h3>Frontend</h3>
    <pre><code>cd frontend
npm install
npm start</code></pre>

    <h3>Docker</h3>
    <pre><code>docker-compose up --build</code></pre>

    <h3>A aplicação estará disponível em:</h3>
    <ul>
        <li><strong>Frontend:</strong> <a href="http://localhost" target="_blank">http://localhost</a></li>
        <li><strong>Backend:</strong> <a href="http://localhost:3001" target="_blank">http://localhost:3001</a></li>
        <li><strong>MongoDB:</strong> mongodb://localhost:27017</li>
    </ul>

    <h2>Testes</h2>

    <h3>Backend</h3>
    <pre><code>cd backend
npm test</code></pre>

    <h3>Frontend</h3>
    <pre><code>cd frontend
npm test</code></pre>

    <h2>Variáveis de Ambiente</h2>

    <h3>Backend</h3>
    <ul>
        <li><code>MONGODB_URI</code>: URL de conexão do MongoDB</li>
        <li><code>PORT</code>: Porta do servidor (padrão: 3001)</li>
    </ul>

    <h3>Frontend</h3>
    <ul>
        <li><code>REACT_APP_API_URL</code>: URL da API backend</li>
    </ul>

    <h2>Problemas Conhecidos</h2>
    <ul>
        <li>Configuração CORS para produção</li>
        <li>Variáveis de ambiente não configuradas</li>
        <li>Autenticação MongoDB</li>
        <li>Build do frontend para produção</li>
        <li>Configuração Nginx</li>
    </ul>

    <h2>Autor</h2>
    <p>Desenvolvido para teste prático de contratação</p>