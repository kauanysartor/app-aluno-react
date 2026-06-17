# 🎓 Portal do Aluno - SPA em React

Este projeto consiste na portabilidade e otimização de um sistema acadêmico para uma Single Page Application (SPA), utilizando React, Vite e React Router DOM. O objetivo principal é centralizar o fluxo de autenticação, o painel do estudante e a integração com um sistema de tutoria em uma experiência fluida e sem recarregamentos de página.

---

## 🛠️ Critérios Técnicos Atendidos

### **1. Gerenciamento de Rotas (`react-router-dom`)**

* **Fluxo de Autenticação:** Configuração de rotas para Login (`/`), Cadastro de CPF (`/registro`), Dados Complementares (`/cadastro-dados`), Recuperação de Senha (`/esqueceu`) e Redefinição (`/nova-senha`).
* **Área Interna do Aluno:** Rotas para o Painel/Dashboard (`/dashboard`), Grade de Disciplinas (`/disciplinas`), Perfil (`/perfil`) e a Sala de Tutoria (`/tutoria`).
* **Estrutura:** A navegação foi implementada de forma declarativa e centralizada dentro do arquivo `App.jsx`.

---

### **2. Gerenciamento de Estado Global (Context API) 🌐**

* **Centralização:** Implementação do `UsuarioContext` para armazenar e distribuir os dados essenciais do estudante (como Nome e Curso).
* **Otimização:** Emprego de estado global para eliminar completamente o padrão de *Prop Drilling*. Isso permite que os componentes `Header`, `DashboardPage`, `PerfilPage` e `TutorIAPage` acessem as informações do usuário logado de forma direta e síncrona.

---

### **3. Validações Dinâmicas e Tratamento de Erros ⚠️**

* **Captura de Dados:** Formulários estruturados com o uso do hook `useState` para capturar os dados digitados e validar as regras de negócio antes do envio.
* **Regras de Validação:** Verificação de preenchimento obrigatório de e-mail/senha na tela de login e validação do formato do e-mail.
* **Feedback Visual:** Renderização condicional de mensagens de alerta em texto diretamente na interface para orientar o usuário em caso de inconsistências.

---

### **4. Assincronismo e Estados de Interface (`TutorIAPage`) 🤖**

* **Simulação de API:** Uso combinado dos hooks `useEffect` e `useState` para simular requisições assíncronas de busca de dados no banco de dados da IA.
* **Estados de Interface:** Tratamento explícito de estados de Carregamento (*Loading*) e de cenários de Falha (*Error*), garantindo que a interface mude de estado visualmente antes de exibir os blocos

## 🚀 Como Executar o Projeto Localmente

1. **Clonar o repositório:**
   ```bash
   git clone (https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)

2. **Entrar na pasta do projeto:**
    ```Bash
    cd app-aluno-react

3. **Instalar as dependências do projeto:**
    ```Bash
    npm install

4. **Iniciar o servidor de desenvolvimento (Vite):**
    ```Bash
    npm run dev

5. **Acessar no navegador:**
    ```Bash
    Abra o endereço local indicado no terminal (geralmente http://localhost:5173 ou http://localhost:5174).

## 📁 Estrutura de Pastas Principal:

**src/components/**: Componentes visuais reaproveitáveis do sistema (Header, Cards de disciplinas, Inputs customizados).

**src/context/**: Configuração do estado global da aplicação (UsuarioContext.jsx) para o compartilhamento de dados.

**src/pages/**: Telas completas do sistema que são renderizadas por meio do sistema de rotas.

**src/context/**: Contém o arquivo UsuarioContext.jsx, responsável pela configuração e compartilhamento do estado global dos dados do aluno.

**src/pages/**: Agrupa as telas completas mapeadas pelo roteador: LoginPage.jsx, CadastroPage.jsx, CadastroDadosPage.jsx, RecuperarSenhaPage.jsx, NovaSenhaPage.jsx, DashboardPage.jsx, DisciplinasPage.jsx, PerfilPage.jsx e TutorIAPage.jsx.

**src/App.css**: Arquivo central de estilização do layout e das regras de responsividade para dispositivos móveis.

**src/App.jsx**: O arquivo principal do ecossistema de rotas, onde a árvore do BrowserRouter fica declarada.

**src/main.jsx**: O ponto de partida do Vite que inicializa e renderiza o React na árvore do navegador.
