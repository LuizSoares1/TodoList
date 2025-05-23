<h1>🖼️TODO App - Frontend</h1>

<h2>Visão Geral</h2>
<p>
Este é o <strong>frontend</strong> do sistema de gestão de tarefas (Todo List), desenvolvido em <strong>React</strong> com <strong>Material UI</strong>, preparado para ambientes de <strong>desenvolvimento</strong> e <strong>produção</strong>, com suporte a <strong>Docker</strong> e integração com uma API Node.js.
</p>

<hr>

<h2>Requisitos</h2>
<ul>
<li><a href="https://nodejs.org/">Node.js 18+</a></li>
<li><a href="https://git-scm.com/">Git</a></li>
<li><a href="https://www.docker.com/">Docker & Docker Compose</a> (opcional)</li>
</ul>

<hr>

<h2>Instalação Local</h2>
<pre><code>cd frontend
npm install
npm start</code></pre>

<p>A aplicação estará disponível em:</p>
<p>🔗 <code>http://localhost:3000</code></p>

<hr>

<h2>Variáveis de Ambiente</h2>
  <table border="1" cellpadding="6" cellspacing="0">
    <thead>
      <tr>
        <th>Variável</th>
        <th>Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>REACT_APP_API_URL</code></td>
        <td>URL da API backend (ex: <code>http://localhost:3001/api</code>)</td>
      </tr>
    </tbody>
  </table>

  <hr>

  <h2>Testes</h2>
  <p>Para rodar os testes automatizados:</p>
  <pre><code>cd frontend
npm test</code></pre>

  <hr>

  <h2>Docker</h2>
  <p>Para buildar e rodar o frontend com Docker:</p>
  <pre><code>docker build -t todo-frontend .
docker run -p 80:80 todo-frontend</code></pre>

  <p>Ou, se estiver usando <code>docker-compose</code>:</p>
  <pre><code>docker-compose up --build</code></pre>

  <hr>

  <h2>Funcionalidades</h2>
  <ul>
    <li>✅ CRUD completo de tarefas (Criar, Listar, Atualizar, Excluir)</li>
    <li>✅ Filtro por status: <strong>All</strong>, <strong>Active</strong>, <strong>Completed</strong></li>
    <li>✅ Interface responsiva (desktop e mobile)</li>
    <li>✅ Modal de edição com campos preenchidos</li>
    <li>✅ Estilização completa com Material UI</li>
  </ul>

  <hr>

  <h2>Layout e Estilo</h2>
  <ul>
    <li>Fonte padrão: <code>Roboto</code> (Material UI)</li>
    <li>Título principal: <code>32px</code></li>
    <li>Seções: <code>18px</code></li>
    <li>Texto normal: <code>16px</code>, secundário: <code>14px</code></li>
    <li>Paleta de cores:
      <ul>
        <li>Primária: Azul (<code>#1976d2</code>)</li>
        <li>Hover: Azul escuro (<code>#1565c0</code>)</li>
        <li>Fundo: Cinza claro (<code>#f5f5f5</code>)</li>
        <li>Texto: Preto (<code>#333</code>) e cinza (<code>#666</code>)</li>
      </ul>
    </li>
    <li>Efeitos de hover em botões e ícones com <code>pointer</code> e destaque visual</li>
  </ul>

  <hr>

  <h2>Deploy</h2>
  <p>Testado na ferramenta do Github em repositório privado para testes</p>


  <hr>

  <h2>Autor</h2>
  <p>Desenvolvido como parte de um <strong>teste prático de contratação</strong>.</p>