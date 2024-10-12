const express = require('express');
const { createCanvas } = require('canvas');
const router = express.Router();

// Resim oluşturma endpointi
router.get('/ciz', (req, res) => {
    const { prompt } = req.query;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt gerekli.' });
    }

    // Canvas boyutları
    const width = 800;
    const height = 600;

    // Canvas oluştur
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Arka planı beyaz yap
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    // Metni ekle
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText(prompt, 50, 100);

    // Resmi PNG formatında oluştur
    const buffer = canvas.toBuffer('image/png');

    // Resmi kullanıcıya gönder
    res.set('Content-Type', 'image/png');
    res.send(buffer);
});

module.exports = router;
