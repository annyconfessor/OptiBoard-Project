# 📊 Optiboard

**Optiboard** é um painel visual simples e intuitivo para organizar postagens.  
Hoje, é apenas uma tabela simples, mas será ideal para criadores de conteúdo, social media ou qualquer pessoa que deseje visualizar ideias de forma clara.

Acesse a [página inicial](https://optiboard-project.surge.sh/) para entender o projeto e testar a tabela de organização.

## 🧩 Funcionalidades implementadas

✅ Integração com a API do JSONPlaceholder para obtenção de posts.

✅ Organização dos posts em uma tabela interativa com colunas: ID, título e descrição.

✅ Edição inline dos dados diretamente na tabela.

✅ Busca automática enquanto o usuário digita (com debounce de 500ms para performance).

✅ Interface leve e responsiva, adaptada para diferentes tamanhos de tela.

✅ Indicador de carregamento (loading) durante a execução da busca.

✅ Paginação dos resultados, permitindo navegação entre páginas.

✅ Página inicial (homepage) apresentando o projeto e direcionando para a tabela de posts.

## 🔮 Próximos passos

- Salvamento automático com login.
- Tags, datas e categorias personalizadas.
- Compartilhamento de quadros com colaboradores.
- Modo claro e outras personalizações visuais.

## 🛠️ Tecnologias

Este projeto foi criado com:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 📂 Estrutura

- `src/pages/Home.tsx` → Página inicial institucional.
- `src/pages/Dashboard.tsx` → Tabela para organização de postagens.

## 💻 Instruções para rodar a aplicação

```bash
git clone https://github.com/annyconfessor/OptiBoard-Project.git  
cd OptiBoard-Project
yarn
yarn dev
