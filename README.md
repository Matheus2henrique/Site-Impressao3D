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

- [ ] Integração com backend e banco de dados
- [ ] Autenticação e cadastro de usuários
- [ ] Carrinho completo com checkout e pagamento
- [ ] Personalização de cores e detalhes dos modelos
- [ ] Upload de modelos customizados pelos usuários

## 📄 Licença

Este projeto é privado e de uso exclusivo da **Gráfica 3D Store**. Todos os direitos reservados.