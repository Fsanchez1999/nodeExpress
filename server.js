const express = require("express");
const path = require("path");
const jsonServer = require("json-server");

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Configurar o JSON Server como middleware
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

app.use(middlewares);

// 2. Usar o router do JSON Server para a API
// O JSON Server irá lidar com todas as requisições para /usuarios
app.use(router);

// 3. Servir os arquivos estáticos (HTML, CSS, JS do front-end)
app.use(express.static(path.join(__dirname, "public")));

// 4. Rota principal para o index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 5. Iniciar o servidor Express
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
