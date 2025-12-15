# 💼 Portfólio Giovanna Arrais

![Next.js](https://img.shields.io/badge/Next.js-15.4.8-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql)
![License](https://img.shields.io/badge/license-Private-red?style=for-the-badge)

## 📋 Descrição

Portfólio pessoal desenvolvido com foco em apresentar projetos, habilidades técnicas e facilitar o contato profissional. A aplicação oferece uma experiência moderna, responsiva e acessível, destacando trabalhos de design, desenvolvimento e experiências digitais que unem estética e funcionalidade.

O projeto resolve a necessidade de ter uma presença digital profissional centralizada, permitindo que visitantes conheçam o trabalho, tecnologias utilizadas e entrem em contato de forma direta e eficiente.

## 🎨 Demonstração / Preview

A aplicação apresenta uma interface moderna com:

- Design responsivo que se adapta a diferentes dispositivos
- Tema claro/escuro configurável
- Animações suaves e transições elegantes
- Elementos visuais interativos
- Formulário de contato integrado com envio de emails

## ✨ Funcionalidades Principais

### 🏠 Seções do Portfólio

- **Apresentação**: Hero section com introdução pessoal e call-to-action
- **Sobre**: Informações pessoais e profissionais sobre a desenvolvedora
- **Stacks & Ferramentas**: Exibição de tecnologias organizadas por categoria (Front-End, Back-End, Ferramentas, Outros) com níveis de proficiência
- **Projetos**: Galeria de projetos desenvolvidos com detalhes e links
- **Contato**: Formulário funcional integrado com Resend para envio de emails e links para redes sociais

### 🎯 Recursos Técnicos

- **Tema Dark/Light**: Alternância entre temas usando `next-themes`
- **Formulário de Contato**: Validação com React Hook Form e Zod, integração com Resend API
- **Banco de Dados**: PostgreSQL com Drizzle ORM para gerenciamento de dados
- **Componentes Reutilizáveis**: Arquitetura modular com componentes UI baseados em Radix UI
- **Animações**: Elementos visuais animados e loops de stacks
- **SEO Otimizado**: Metadata configurada para melhor indexação
- **Performance**: Otimizações do Next.js 15 (App Router, Server Components)

## 🛠️ Tecnologias Utilizadas

### Core

- **[Next.js 15.4.8](https://nextjs.org/)** - Framework React com App Router
- **[React 19.1.2](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática

### Estilização

- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Shadcn](https://ui.shadcn.com/)** - Componentes acessíveis e sem estilo
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[React Icons](https://react-icons.github.io/react-icons/)** - Ícones adicionais

### Banco de Dados & ORM

- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript leve e performático
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Ferramentas de migração e geração

### Formulários & Validação

- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários performático
- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript-first

### Email & APIs

- **[Resend](https://resend.com/)** - API para envio de emails transacionais
- **[Sonner](https://sonner.emilkowal.ski/)** - Sistema de notificações toast

## 📁 Estrutura de Pastas

```
portfolio-ga/
├── public/                    # Arquivos estáticos (imagens, SVGs, logos)
│   ├── elements/             # Elementos visuais decorativos
│   └── projects/             # Imagens dos projetos
│
├── src/
│   ├── app/                  # App Router do Next.js
│   │   ├── api/              # Rotas de API
│   │   │   ├── contact/      # Endpoint de contato
│   │   │   └── keepalive/    # Endpoint de keep-alive
│   │   ├── components/       # Componentes específicos da aplicação
│   │   │   ├── About/        # Seção sobre
│   │   │   ├── Apresentacao/ # Hero section
│   │   │   ├── Contato/      # Seção de contato e formulário
│   │   │   ├── Header/       # Cabeçalho com navegação e tema
│   │   │   ├── Projects/     # Galeria de projetos
│   │   │   ├── Stacks/       # Seção de tecnologias
│   │   │   └── Container/    # Componente de container
│   │   ├── globals.css       # Estilos globais
│   │   ├── layout.tsx        # Layout raiz
│   │   └── page.tsx          # Página principal
│   │
│   ├── components/           # Componentes reutilizáveis
│   │   ├── ui/               # Componentes UI base (shadcn/ui)
│   │   └── LogoLoop.tsx     # Componente de loop de logos
│   │
│   ├── data/                 # Funções de acesso a dados
│   │   ├── personalInfos/    # Informações pessoais
│   │   ├── Projects/         # Dados dos projetos
│   │   ├── Social/           # Links sociais
│   │   └── Stacks/           # Dados das tecnologias
│   │
│   ├── db/                   # Configuração do banco de dados
│   │   ├── index.ts          # Conexão com o banco
│   │   ├── schema.ts         # Schemas do Drizzle
│   │   └── seed.ts           # Script de seed
│   │
│   └── lib/                  # Utilitários
│       └── utils.ts          # Funções auxiliares
│
├── drizzle/                  # Migrações do banco de dados
├── drizzle.config.ts         # Configuração do Drizzle Kit
├── next.config.ts            # Configuração do Next.js
├── package.json              # Dependências e scripts
└── tsconfig.json             # Configuração do TypeScript
```

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos

- **Node.js** 18.x ou superior
- **npm** ou **yarn** ou **pnpm**
- **PostgreSQL** instalado e rodando
- Conta no **Resend** (para envio de emails) - [criar conta](https://resend.com/)

### Passo a Passo

1. **Clone o repositório**

    ```bash
    git clone <url-do-repositorio>
    cd portfolio-ga
    ```

2. **Instale as dependências**

    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

3. **Configure as variáveis de ambiente**

    Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

    ```env
    # Banco de Dados
    DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"

    # Resend API (para envio de emails)
    RESEND_API_KEY="sua_chave_api_resend"
    ```

4. **Configure o banco de dados**

    Execute as migrações do Drizzle:

    ```bash
    npx drizzle-kit generate
    npx drizzle-kit migrate
    ```

    (Opcional) Execute o seed para popular o banco com dados iniciais:

    ```bash
    npm run db:seed
    # ou o comando que você configurou no package.json
    ```

5. **Inicie o servidor de desenvolvimento**

    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    ```

6. **Acesse a aplicação**

    Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint

## ✅ Boas Práticas Aplicadas

### Arquitetura e Organização

- ✅ **Separação de responsabilidades**: Componentes, dados e lógica bem organizados
- ✅ **Componentes reutilizáveis**: UI components baseados em shadcn/ui
- ✅ **Server Components**: Uso de Server Components do Next.js para melhor performance
- ✅ **TypeScript**: Tipagem forte em todo o projeto

### Performance

- ✅ **Otimização de imagens**: Uso do componente `Image` do Next.js
- ✅ **Code splitting**: Automático com App Router
- ✅ **Server-side rendering**: Renderização no servidor quando apropriado
- ✅ **Lazy loading**: Componentes carregados sob demanda

### Acessibilidade

- ✅ **Componentes acessíveis**: Uso de Radix UI que segue padrões ARIA
- ✅ **Semântica HTML**: Estrutura semântica adequada
- ✅ **Navegação por teclado**: Suporte completo a navegação via teclado
- ✅ **Contraste de cores**: Paleta de cores com bom contraste

### Responsividade

- ✅ **Mobile-first**: Design pensado primeiro para mobile
- ✅ **Breakpoints consistentes**: Uso de breakpoints do Tailwind
- ✅ **Layout flexível**: Grid e Flexbox para adaptação
- ✅ **Imagens responsivas**: Imagens que se adaptam ao tamanho da tela

### SEO

- ✅ **Metadata configurada**: Title e description no layout
- ✅ **Estrutura semântica**: Uso correto de headings (h1, h2, etc.)
- ✅ **URLs amigáveis**: Estrutura de rotas clara
- ✅ **Open Graph**: Preparado para compartilhamento em redes sociais

### Código

- ✅ **ESLint**: Linting configurado
- ✅ **Prettier**: Formatação automática de código
- ✅ **Validação de formulários**: Zod para schemas de validação
- ✅ **Tratamento de erros**: Try/catch em operações assíncronas

## 👤 Autor(a)

**Giovanna Arrais**

- Email: giovannaarrais13@gmail.com
- Portfólio: [Em desenvolvimento]
- LinkedIn: [Adicione seu LinkedIn]
- GitHub: [Adicione seu GitHub]

---

## 📝 Licença

Este projeto é privado e de uso pessoal. Todos os direitos reservados.
