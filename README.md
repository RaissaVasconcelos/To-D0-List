# To-Do-List_NestJS_React

Aplicação FullStack de uma lista de tarefas

## 🗯️ Funcionalidades

 O projeto consiste numa lista de tarefas que adiciona, gerencia e deleta atividades 
 que devem ser realizadas pelos usuários.
 
 ![ToDo](gravação-todo.gif)

<br />

## ⚙️ Tecnologias

- NestJS
- React
- TypeScript
- Express.js
- MongoDB
- Zod
- Docker
- Docker-Compose

<br />

## 🚀 Instalação e execução

### Instalação e execução com Docker

Para rodar está aplicação é necessário ter **Git**, **Node**, **Docker** e o **Docker Compose** instalados no seu computador. O Docker Compose precisa estar na versão **1.29** ou superior e o Node na versão 16.

Para conseguir executar os comandos do abaixo também é necessário que seu sistema operacional tenha um terminal Bash instalado. Caso você esteja utilizando Linux ou macOS, o Bash já vem instalado por padrão. Porém, se o seu sistema for Windows, você pode [aprender como instalar](https://dicasdeprogramacao.com.br/como-instalar-o-git-no-windows/).

### 1 - Na raíz do projeto, suba os containers do frontend, backend e o banco de dados (`MongoDB`) com o comando:

    docker-compose up -d 

O container da Api está mapeando a porta:

- to-do-list_api: 3001

O container da Web está mapeando a porta:

- to-do-list_web: 3000

Para parar os containers, na pasta raiz do projeto execute o comando:

    docker-compose down


<br />

## 🙎🏻‍♀️ Usuários para fazer Login

Nessa aplicação é necessário fazer o login com name e password no endereço http://localhost:3000/.

A tabela abaixo disponibiliza usuários pré-cadastrados para o acesso:

|   Nome   |   Senha    |
| :------: | :--------: |
|  Letty   | nitro123   |
|  Toretto | acelera123 |

<br />


<div>
  <p align="center">🍀</p>
</div>
