### aluraflix-challenge
Praticando React: Challenge AluraFlix

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/rafinhatrevs/aluraflix-challenge">
  
  <a href="https://github.com/rafinhatrevs/aluraflix-challenge/commits/master/">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rafinhatrevs/aluraflix-challenge">
  </a>
  
  <a href="https://www.linkedin.com/in/rafaellatrevizan/">
    <img alt="Feito por Rafaella Trevizan" src="https://img.shields.io/badge/feito-por%20Rafaella%20Trevizan-D818A5">
  </a>

  <img alt="Status Em Desenvolvimento" src="https://img.shields.io/badge/status-EM%20DESENVOLVIMENTO-green">
</p>   

# AluraFlix
Este projeto é o AluraFlix, uma plataforma cujo objetivo é ser uma Netflix da Alura. Com ele, é possível criar cards de vídeos educacionais através de um formulário, organizá-los em categorias como FRONT END, BACK END e MOBILE, editá-los utilizando um formulário em modal e deletá-los quando necessário. Projeto desenvolvido em React como parte de um desafio do programa ONE, ele oferece uma forma prática de gerenciar conteúdos educacionais de forma intuitiva e eficiente.

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="1000">

###  💻 Estrutura do Projeto

- **db.json:** Arquivo que simula uma API REST para realizar operações CRUD e simular respostas do servidor.

#### src/:
- **App.js:** Arquivo responsável por definir a estrutura principal da aplicação, configurando o roteamento e os componentes globais.
- **conexaoApi.js:** Arquivo que gerencia as requisições à API para manipular categorias e cards.

  #### components/:
  - **Banner:** Exibe a imagem, categoria, título e descrição de um vídeo em destaque.
  - **Botao:** Representa um botão interativo reutilizável.
  - **Cabecalho:** Contém a logotipo e dois botões responsáveis pela navegação entre páginas.
  - **CampoTexto:** Componente de entrada de texto para formulários.
  - **Card:** Exibe a imagem de um vídeo e as opções de edição ou exclusão do mesmo.
  - **Categoria:** Representa e organiza cards de vídeos por categorias específicas.
  - **FormModal:** Modal que contém um formulário para edição de vídeo.
  - **FormNovoCard:** Formulário para adicionar um novo card.
  - **ListaSuspensa:** Componente de seleção com opções de categorias em formato de dropdown.
  - **Modal:** Janela sobreposta para exibir o formulário de edição de vídeo.
  - **NovoCard:** Componente para criar e exibir um novo card.
  - **Opcao:** Representa uma opção interativa e reutilizável dentro de um botão.
  - **Rodape:** Exibe a logotipo no final da página.

  #### contexts/:
  - **CategoriasContext.js:** Define um contexto para compartilhar o estado global relacionado a categorias, card selecionado e visibilidade do modal, permitindo acesso e atualização desses dados em toda a aplicação.

  #### hooks/:
  - **useCategoriasContext.js:** Hook responsável por centralizar a lógica e as operações relacionadas a categorias e cards.
 
  #### pages/:
  - **Home.js:** Exibe o banner de destaque, lista as categorias disponíveis usando o contexto, e inclui o componente Modal para interações de edição.
  - **NovoVideo.js:** Exibe o componente NovoCard para adicionar um novo vídeo através de um formulário.

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="1000">

### ⚙️ Funcionalidades

- **Conexão API:**  
  Estabelece uma conexão com a API para realizar operações de leitura e escrita de categorias e cards.
  
- **Mostrar Categorias:** `GET` `/categorias`  

- **Criar Card:** `POST` `/cards`  

- **Atualizar Card:** `PUT` `/cards/:id`  

- **Excluir Card:** `DELETE` `/cards/:id`  
  
<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="1000">

### 🛠 Tecnologias Utilizadas

- **HTML:** Linguagem de marcação utilizada na construção de páginas na web.
- **CSS:** Mecanismo para adicionar estilos a uma página web.
- **JavaScript:** Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.
- **json-server:** Ferramenta que permite simular uma API REST para desenvolvimento e testes.
- **React:** Biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="1000">

### 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`.
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`.
4. Envie as suas alterações: `git push origin my-feature`.
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://docs.github.com/pt/get-started/exploring-projects-on-github/contributing-to-a-project).

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="1000">

###  🔑 Licença

Este projeto é licenciado por [MIT](https://opensource.org/license/mit).

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="1000">

**Feito com 💜 por Rafaella Trevizan [Entre em contato!](https://www.linkedin.com/in/rafaellatrevizan/)**
