const express = require('express');
const cors = require('cors');
require('dotenv').config();

const musicRoutes = require('./src/routes/musicRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Usar as rotas que você criou
app.use('/api', musicRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});