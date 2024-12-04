# Contador de Palavras em Arquivo de Texto

Este projeto consiste em um aplicativo simples que lê um arquivo de texto enviado pelo usuário e conta o número de palavras presentes nele. O sistema foi desenvolvido utilizando **Node.js** para o backend, com **Express** para criar o servidor, e **HTML**, **CSS** e **JavaScript** para o frontend.

## Tecnologias Usadas

- **Node.js** com o framework **Express** para o backend.
- **HTML** para a estrutura da página web.
- **CSS** para o design da interface.
- **JavaScript** para manipulação do DOM e processamento do upload de arquivos.

## Funcionalidade

O sistema permite que o usuário envie um arquivo de texto e, após o envio, o sistema conta o número de palavras no arquivo e exibe o resultado na página.

## Como Rodar o Projeto

### 1. Clone o Repositório

Primeiro, clone este repositório para a sua máquina local:

```bash
git clone https://github.com/IcaroSenaDev/word-counter.git
cd word-counter
```

### 2. Instale as Dependências

Antes de rodar o projeto, é necessário instalar as dependências do Node.js. No terminal, execute o seguinte comando:

```bash
npm install
```

### 3. Rodando o servidor

Para iniciar o servidor, execute:

```bash
node app.js
```

### 4. Acessando a Página Web

Abra o navegador e acesse http://localhost:3000. A página exibirá um formulário onde você pode fazer o upload de um arquivo de texto.

### 5. Usando o Contador de Palavras
- **Clique no botão "Escolher Arquivo" e selecione um arquivo de texto (.txt).**
- **Clique no botão "Contar Palavras".**
- **O número de palavras no arquivo será exibido logo abaixo do botão.**