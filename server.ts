import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './rotes';

dotenv.config();

const app = express();
const port = 5000;

routes (app); //ativa todas as rotas definidas no aquivo de rotas || Se você não chamar routes(app), o Express não sabe de nenhuma rota além das que você escrever direto no server.ts.


app.get('/', (req, res) => {
  res.send('API funcionando!');
});

mongoose.connect(process.env.DB_CONNECTION_STRING!)
  .then(() => {
    console.log('Conectado ao MongoDB');

    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar no MongoDB:', err);
  });
