<h1 align="center">
  Task Manager
</h1>

## Sobre o Projeto

Sistema de gerenciamento de tarefas desenvolvido com React que permite organizar atividades diárias por períodos (manhã, tarde e noite). A aplicação oferece um dashboard completo com estatísticas de tarefas, controle de status (não iniciada, em andamento, concluída) e operações CRUD completas com persistência de dados via JSON Server.

---

## Funcionalidades

- **Dashboard Analítico** - Visualização consolidada com métricas de tarefas totais, não iniciadas, em andamento e concluídas
- **Organização por Período** - Classificação de tarefas em três períodos do dia (manhã, tarde e noite)
- **Gerenciamento de Status** - Controle de ciclo de vida das tarefas (não iniciada → em andamento → concluída)
- **CRUD Completo** - Criação, leitura, atualização e exclusão de tarefas com validação de formulários
- **Interface Responsiva** - Design adaptável para diferentes dispositivos com Tailwind CSS
- **Feedback Visual** - Notificações toast para ações do usuário e transições suaves

---

## Tecnologias

### Frontend
- **[React](https://react.dev/)** - Biblioteca para construção de interfaces
- **[React Router DOM](https://reactrouter.com/)** - Roteamento SPA com navegação client-side
- **[TanStack Query](https://tanstack.com/query)** - Gerenciamento de estado assíncrono e cache
- **[React Hook Form](https://react-hook-form.com/)** - Validação e controle de formulários
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Tailwind Variants](https://www.tailwind-variants.org/)** - Composição de variantes de componentes
- **[Sonner](https://sonner.emilkowal.ski/)** - Sistema de notificações toast

### Backend
- **[JSON Server](https://github.com/typicode/json-server)** - API REST simulada para desenvolvimento
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições

### DevOps & Ferramentas
- **[Vite](https://vitejs.dev/)** - Build tool com HMR ultrarrápido
- **[ESLint](https://eslint.org/)** - Linter para padronização de código
- **[Prettier](https://prettier.io/)** - Formatação automática de código
- **[Husky](https://typicode.github.io/husky/)** - Git hooks para quality gates
- **[Lint Staged](https://github.com/lint-staged/lint-staged)** - Execução de linters em arquivos staged

---

## Estrutura do Projeto

```
task-manager/
├── public/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/
│   │   ├── AddTaskDialog.jsx
│   │   ├── Button.jsx
│   │   ├── DashboardCard.jsx
│   │   ├── DashboardCards.jsx
│   │   ├── Header.jsx
│   │   ├── Input.jsx
│   │   ├── Sidebar.jsx
│   │   ├── TaskItem.jsx
│   │   ├── Tasks.jsx
│   │   └── TimeSelect.jsx
│   ├── hooks/
│   │   └── data/
│   │       ├── use-add-task.js
│   │       ├── use-delete-task.js
│   │       ├── use-get-task.js
│   │       ├── use-get-tasks.js
│   │       └── use-update-task.js
│   ├── keys/
│   │   ├── mutations.js
│   │   └── queries.js
│   ├── lib/
│   │   └── axios.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── TaskDetails.jsx
│   │   └── Tasks.jsx
│   └── main.jsx
└── db.json
```

---

## English Version

### About

Task management system built with React that allows organizing daily activities by time periods (morning, afternoon, and evening). The application features a comprehensive dashboard with task statistics, status control (not started, in progress, completed), and full CRUD operations with data persistence via JSON Server.

### Features

- **Analytics Dashboard** - Consolidated view with metrics for total, not started, in progress, and completed tasks
- **Period Organization** - Task classification into three daily periods (morning, afternoon, evening)
- **Status Management** - Task lifecycle control (not started → in progress → completed)
- **Full CRUD** - Create, read, update, and delete tasks with form validation
- **Responsive Interface** - Adaptive design for different devices with Tailwind CSS
- **Visual Feedback** - Toast notifications for user actions and smooth transitions

### Tech Stack

**Frontend:** React, React Router DOM, TanStack Query, React Hook Form, Tailwind CSS, Sonner

**Backend:** JSON Server, Axios

**DevOps:** Vite, ESLint, Prettier, Husky, Lint Staged
