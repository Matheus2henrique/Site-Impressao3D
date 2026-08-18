# MVP Gráfica 3D

**Loja virtual (MVP) de modelos impressos em 3D sob demanda.** Catálogo de chaveiros, colecionáveis, itens para casa (household) e materiais educacionais, com filtros por categoria, página de detalhes do produto, especificações técnicas, preços e carrinho.

> Projeto em desenvolvimento — MVP funcional construído para validar a ideia de vender modelos 3D personalizados produzidos sob demanda.

## ✨ Funcionalidades

- 🏷️ **Catálogo com filtros** — navegue por categorias: Todos, Chaveiros, Colecionáveis, Household e Educacional
- 📄 **Página de detalhes** — preço, avaliação, curtidas, downloads, salvamentos e especificações (material, peças, tempo de impressão, arquivo)
- 🛒 **Carrinho** — botão "Comprar agora" com feedback de item adicionado
- 👤 **Perfil** — área do usuário com navegação integrada
- 🎨 **Design responsivo** — layout adaptável a diferentes tamanhos de tela
- 🔄 **Navegação fluida** — rolagem suave entre seções e filtros

## 🧰 Tecnologias

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [React](https://react.dev) | 19.x | Interface do usuário |
| [Vite](https://vite.dev) | 8.x | Build e dev server |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Estilização |
| [ESLint](https://eslint.org) | 10.x | Qualidade de código |
| [Express](https://expressjs.com) | 4.x | API do backend |
| [PostgreSQL](https://www.postgresql.org) | 15/16/17 | Banco de dados (driver `pg`) |
| [JWT](https://jwt.io) + bcrypt | — | Autenticação de usuários |

## 📁 Estrutura do projeto

```
MVP-grafica/
├── frontend/                  # Aplicação React + Vite
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── src/
│       ├── main.jsx           # Entry point
│       ├── App.jsx            # Componente raiz e navegação
│       ├── index.css          # Estilos globais (Tailwind)
│       ├── api.js             # Cliente HTTP do backend (fetch + token)
│       ├── data/
│       │   └── produtos.js    # Dados dos produtos (mock)
│       ├── assets/            # Recursos estáticos
│       └── components/
│           ├── Header.jsx
│           ├── Banner.jsx
│           ├── Catalogo.jsx
│           ├── Card.jsx
│           ├── ProdutoDetalhe.jsx
│           ├── Perfil.jsx
│           └── Icones.jsx
├── backend/                   # API Express + PostgreSQL
│   ├── package.json
│   ├── .env                   # ← CONEXÃO COM SEU BANCO AQUI
│   ├── .env.example
│   └── src/
│       ├── server.js          # Servidor Express
│       ├── db.js              # Pool do PostgreSQL
│       ├── schema.sql         # Criação das tabelas
│       ├── migrate.js         # Aplica o schema (npm run migrate)
│       ├── seed.js            # Popula produtos (npm run seed)
│       ├── middleware/auth.js # Proteção por token JWT
│       ├── data/produtos.js   # Dados iniciais dos produtos
│       └── routes/
│           ├── auth.js        # registrar, login, perfil
│           ├── produtos.js    # catálogo
│           ├── favoritos.js   # favoritos por usuário
│           ├── pedidos.js     # checkout com pagamento + estoque
│           └── assinaturas.js # Clube Locus
└── package-lock.json
```

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org) **20.x ou superior** (recomendado)
- npm (incluído com o Node.js)

### Passo a passo

```bash
# 1. Acesse a pasta do frontend
cd frontend

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Abra o endereço exibido no terminal (por padrão `http://localhost:5173`) no seu navegador.

### Rodando o backend (PostgreSQL)

1. **Configure o banco**: edite o arquivo `backend/.env` com os dados do seu PostgreSQL
   (host, porta, usuário, senha e nome do banco). Exemplo:

   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=SUA_SENHA
   DB_NAME=locus
   ```

2. **Instale as dependências** (dentro de `backend/`):

   ```bash
   cd backend
   npm install
   ```

3. **Crie as tabelas** e **popule os produtos**:

   ```bash
   npm run migrate   # cria as tabelas (usuarios, produtos, pedidos, favoritos, assinaturas...)
   npm run seed      # insere os 18 produtos do catálogo
   ```

4. **Inicie o servidor**:

   ```bash
   npm run dev       # http://localhost:4000
   ```

O frontend já está ligado à API (login, cadastro, favoritos e finalização de compra).

### Endpoints da API

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| `POST` | `/api/auth/registrar` | Cria conta (nome, email, senha) | — |
| `POST` | `/api/auth/login` | Entra e devolve token JWT | — |
| `GET` | `/api/auth/perfil` | Consulta o usuário logado no banco | Token |
| `GET` | `/api/produtos` | Lista o catálogo | — |
| `GET` | `/api/produtos/:id` | Detalhe de um produto | — |
| `GET` | `/api/favoritos` | Lista favoritos do usuário | Token |
| `POST` | `/api/favoritos/:produtoId` | Adiciona favorito | Token |
| `DELETE` | `/api/favoritos/:produtoId` | Remove favorito | Token |
| `POST` | `/api/pedidos` | Checkout (pagamento + baixa de estoque) | — |
| `GET` | `/api/pedidos` | Lista pedidos do usuário | Token |
| `GET` | `/api/pagamentos/status` | Informa se o gateway está ativo | — |
| `POST` | `/api/pagamentos/preferencia` | Cria o checkout no Mercado Pago | — |
| `POST` | `/api/pagamentos/webhook` | Confirma o pagamento (webhook do MP) | — |
| `POST` | `/api/assinaturas` | Ativa assinatura do Clube Locus | Token |
| `GET` | `/api/assinaturas` | Lista assinaturas do usuário | Token |

### Pagamento real com Mercado Pago

Sem configuração, o checkout é **simulado** (cria o pedido e baixa o estoque na hora, sem cobrar).
Para cobrar de verdade:

1. Crie uma aplicação em https://www.mercadopago.com.br/developers e copie o **Access Token**
2. No `backend/.env`, preencha:
   ```env
   MP_ACCESS_TOKEN=APP_USR-xxxxxxxxxxxxxxxx
   BACKEND_URL=http://localhost:4000   # URL pública (ex.: via túnel ngrok em testes)
   ```
3. Ao finalizar a compra, o cliente é redirecionado para o checkout do Mercado Pago (Pix, cartão ou boleto)
4. O webhook `POST /api/pagamentos/webhook` confirma o pagamento; só então o pedido vira `pago` e o estoque é baixado

> Com o gateway ativo, os dados do cartão **não** passam pelo seu servidor — o Mercado Pago processa o pagamento diretamente.

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Pré-visualiza a build de produção localmente |
| `npm run lint` | Executa o ESLint para verificar o código |

### Build de produção

```bash
npm run build
npm run preview
```

## 📸 Screenshots

> Em breve — adicione aqui capturas de tela do catálogo e da página de detalhes.

## 🗺️ Próximos passos

- [x] Integração com backend e banco de dados (PostgreSQL)
- [x] Autenticação e cadastro de usuários
- [x] Favoritos persistidos por usuário
- [x] Checkout com pagamento e baixa de estoque
- [x] Assinaturas do Clube Locus (API)
- [ ] Integrar assinatura na tela do Clube Locus
- [ ] Carrinho completo com pagamento real (gateway)
- [ ] Personalização de cores e detalhes dos modelos
- [ ] Upload de modelos customizados pelos usuários
- [ ] Login com Google no backend

## 📄 Licença

Este projeto é privado e de uso exclusivo da **Gráfica 3D Store**. Todos os direitos reservados.