const express = require('express');
const cors = require('cors');
const app = express();

// A porta deve vir da variável de ambiente do Render ou usar 3000 localmente
const PORT = process.env.PORT || 3000;

// Configuração do CORS (Segurança)
// Substitua 'https://musicstyle.github.io' pelo link exato do seu site
app.use(cors({
    origin: 'https://musicstyle.github.io/music.style' // Use '*' para testar, mas depois restrinja ao seu domínio para segurança
}));

app.use(express.json());

// Dados simulados (Mock Data) - Futuramente isso virá de um Banco de Dados
const musicas = [
    { id: 1, titulo: "Bohemian Rhapsody", artista: "Queen", url: "link-do-mp3" },
    { id: 2, titulo: "Shape of You", artista: "Ed Sheeran", url: "link-do-mp3" },
    { id: 3, titulo: "Blinding Lights", artista: "The Weekend", url: "link-do-mp3" }
];

// Rota principal para testar se o servidor está online
app.get('/', (req, res) => {
    res.send('API do MusicStyle está funcionando! 🎵');
});

// Rota para pegar as músicas
app.get('/api/musicas', (req, res) => {
    res.json(musicas);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});