const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const app = express();
const port = 3000;

// Configuração do multer para upload de arquivo
const upload = multer({ dest: 'uploads/' });

// Serve arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal para a interface web
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Função para contar o número de palavras no arquivo
function contarPalavras(texto) {
  const palavras = texto.split(/\s+/); // Divide o texto por espaços em branco
  return palavras.filter(Boolean).length; // Filtra elementos vazios e conta as palavras
}

// Rota para lidar com o upload do arquivo
app.post('/contar', upload.single('arquivo'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Por favor, envie um arquivo de texto.');
  }

  const caminhoArquivo = path.join(__dirname, req.file.path);

  // Lê o arquivo e conta as palavras
  fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao ler o arquivo.');
    }

    const numeroDePalavras = contarPalavras(data);
    res.send(`Número de palavras no arquivo: ${numeroDePalavras}`);
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
