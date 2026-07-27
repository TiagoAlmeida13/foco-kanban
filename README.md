<div align="center">

# Foco 🤠

### Kanban board com drag-and-drop, construído com Next.js, TypeScript e Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![dnd-kit](https://img.shields.io/badge/dnd--kit-drag--and--drop-6366f1?style=flat-square)](https://dndkit.com)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

[**🔗 Ver deploy ao vivo**](https://foco-kanban.vercel.app) · [Reportar bug](https://github.com/TiagoAlmeida13/foco-kanban/issues)

</div>

---

## Sobre o projeto

**Foco** é um quadro Kanban com três colunas (A Fazer, Em Progresso, Concluído) e suporte completo a arrastar-e-soltar entre elas. A estética é inspirada em um cartaz de recompensas do velho oeste — cards de pergaminho "pinados", quadros de madeira escura e tipografia Rye — como forma de mostrar identidade visual e criatividade além da funcionalidade.

Este projeto foi construído para demonstrar uma habilidade que meus outros projetos ainda não cobriam: **interações de drag-and-drop**, um recurso comum em testes técnicos de front-end e em produtos reais de produtividade.

## Preview

![Preview do kanban board Foco](https://api.microlink.io/?url=https://foco-kanban.vercel.app&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800)

## Funcionalidades

- **Drag-and-drop real** entre colunas, usando [@dnd-kit](https://dndkit.com)
- **Criação de tarefas** por coluna, com etiqueta colorida
- **Exclusão de tarefas**, com tratamento cuidadoso de conflito de eventos entre clique e arraste
- **Persistência local**: o quadro é salvo no `localStorage` e mantido entre sessões
- **Totalmente responsivo**, com colunas empilhando em telas menores

## Tecnologias

| Tecnologia | Uso |
|---|---|
| [Next.js](https://nextjs.org) | Framework React, App Router |
| [TypeScript](https://www.typescriptlang.org) | Tipagem estática das tarefas e colunas |
| [Tailwind CSS](https://tailwindcss.com) | Estilização utilitária |
| [@dnd-kit](https://dndkit.com) | Sistema de arrastar-e-soltar (`useDraggable`, `useDroppable`, `DndContext`) |
| React Hooks | Hook customizado (`useBoard`) para CRUD e persistência |
| [Vercel](https://vercel.com) | Deploy e hospedagem |

## Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/TiagoAlmeida13/foco-kanban.git

# Entre na pasta do projeto
cd foco-kanban

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## Estrutura do projeto

```
foco-kanban/
├── app/
│   ├── components/
│   │   ├── Column.tsx        # Área de soltar (droppable) por coluna
│   │   └── TaskCard.tsx      # Card de tarefa arrastável (draggable)
│   ├── lib/
│   │   ├── types.ts           # Tipagem de tarefas, colunas e cores de etiqueta
│   │   └── useBoard.ts       # Hook customizado: CRUD + localStorage
│   ├── layout.tsx
│   ├── page.tsx                # Composição do board e DndContext
│   └── globals.css
└── package.json
```

## Autor

**Tiago Machado**
Desenvolvedor Front-end

[Portfólio](https://whoami-tiago.vercel.app) · [GitHub](https://github.com/TiagoAlmeida13) · [tyygo@live.com](mailto:tyygo@live.com)

---

<div align="center">
<sub>Projeto desenvolvido para fins de portfólio.</sub>
</div>
