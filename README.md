# Projeto DashGo

# 📊 Dashgo - Dashboard com Next.js & Chakra UI

Dashgo é uma interface de dashboard moderna, responsiva e de alta performance, construída com as tecnologias mais atuais do ecossistema React. O projeto demonstra a implementação de uma arquitetura front-end robusta, focada em escalabilidade, manutenibilidade e experiência do desenvolvedor.

---

### **🎬 Demonstração**

![image](https://github.com/YanzinhoCaue/PROJETO-DASHGO/assets/127339610/79cddebe-23c7-416f-abec-68ed8d863fbd)

---

### **✨ Features em Destaque**

Este projeto vai além de uma simples interface, implementando padrões avançados de desenvolvimento front-end:

**⚛️ Gerenciamento de Estado do Servidor com React Query**
* **Caching Automático**: Os dados da API são mantidos em cache para evitar requisições repetidas e proporcionar uma navegação instantânea.
* **Revalidação em Background**: Os dados são atualizados silenciosamente em segundo plano (`stale-while-revalidate`), garantindo que o usuário sempre veja informações recentes sem bloquear a interface.
* **Mutações e Invalidação**: As operações de criação e edição de usuários invalidam o cache correspondente, atualizando a UI de forma automática e consistente.
* **Pré-busca de Dados (Prefetching)**: Os dados da próxima página de usuários são pré-carregados ao passar o mouse sobre os links de paginação, criando uma experiência de navegação ultra-rápida.

**🎭 API Mock com MirageJS**
* O projeto possui uma camada de API mock completa com MirageJS e Faker.js. Isso permite o desenvolvimento e teste de toda a aplicação front-end de forma independente, sem a necessidade de um back-end real. O mock simula endpoints, paginação e latência de rede.

**🎨 UI Moderna e Responsiva com Chakra UI**
* A interface foi construída utilizando os componentes acessíveis e componentizáveis do Chakra UI, seguindo as melhores práticas de design systems.
* O layout é totalmente responsivo, adaptando-se a diferentes tamanhos de tela com um `Sidebar` que se transforma em `Drawer` em dispositivos móveis.

**📋 Formulários Avançados com React Hook Form & Yup**
* Gerenciamento de formulários performático com `react-hook-form` (controlled components).
* Validação de dados robusta e declarativa através de esquemas com a biblioteca `Yup`.

**🚀 Otimização de Performance**
* Os gráficos do dashboard são carregados de forma assíncrona (lazy loading) com `next/dynamic`, evitando que impactem o carregamento inicial da página.

---

### **🛠️ Tecnologias Utilizadas**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-319795?style=for-the-badge&logo=chakraui&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![MirageJS](https://img.shields.io/badge/Mirage_JS-3A99E9?style=for-the-badge&logo=miragejs&logoColor=white)
![ApexCharts](https://img.shields.io/badge/ApexCharts-008FFB?style=for-the-badge&logo=apexcharts&logoColor=white)

---

### **▶️ Como Executar o Projeto**

**Pré-requisitos:** Node.js e Yarn (ou NPM).

**1️⃣ Clone o repositório**
```bash
git clone [https://github.com/YanzinhoCaue/dashgo.git](https://github.com/YanzinhoCaue/dashgo.git)
````

**2️⃣ Navegue até o diretório do projeto**

```bash
cd dashgo
```

**3️⃣ Instale as dependências**

```bash
yarn install
```

**4️⃣ Execute a aplicação**

```bash
yarn dev
```

A aplicação será iniciada em `http://localhost:3000`. Como o projeto utiliza MirageJS, não é necessário executar um back-end separado.

-----

### **📂 Estrutura do Projeto**

A estrutura de diretórios foi organizada para promover a separação de responsabilidades e a escalabilidade:

```
src/
├── components/   # Componentes reutilizáveis (Form, Header, Pagination)
├── contexts/     # Contextos da aplicação (SidebarDrawerContext)
├── pages/        # Rotas da aplicação (Next.js)
├── services/     # Configuração de APIs e gerenciamento de estado
│   ├── hooks/    # Custom hooks (ex: useUsers)
│   ├── mirage/   # Configuração da API mock
│   └── queryClient.ts
└── styles/       # Estilos globais
```

-----

### **🗺️ Próximos Passos e Melhorias Futuras**

  * **🔐 Autenticação**: Implementar um fluxo de autenticação completo com NextAuth.js.
  * **✅ Testes**: Adicionar testes end-to-end com Cypress ou Playwright.
  * **🌐 Internacionalização (i18n)**: Adicionar suporte a múltiplos idiomas.
  * **🔔 Notificações em Tempo Real**: Implementar notificações com WebSockets.

-----

### **💬 Contato**

**Yan Cauê**

**LinkedIn:** [linkedin.com/in/yancue](https://linkedin.com/in/yancaue)

**GitHub:** [github.com/YanzinhoCaue](https://github.com/YanzinhoCaue)
