const db = require('../config/db');

exports.getAllSongs = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM songs');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar músicas" });
    }
};