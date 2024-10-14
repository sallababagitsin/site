const express = require('express');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');
const router = express.Router(); // Express Router tanımlıyoruz

// API'den veri çekmek için bir fonksiyon
async function searchEmoji(query) {
    const url = `https://emoji.gg/api?search=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    if (!response.ok) { // Yanıtın geçerli olup olmadığını kontrol et
        throw new Error('Emoji API hatası'); // Hata fırlat
    }
    const data = await response.json();
    return data;
}

// Rate limit ayarları
const limiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 1 gün (24 saat)
    max: 500, // Günde en fazla 500 istek
    message: 'Günlük istek limitinizi aştınız. Lütfen yarın tekrar deneyin.'
});

// Tüm rotalara rate limit uygula
router.use(limiter); // Rate limit middleware'ini tüm rotalara uyguluyoruz

// Arama rotası
router.get('/', async (req, res) => {
    const query = req.query.q; // Kullanıcının arama sorgusu
    if (!query) {
        return res.status(400).send('Lütfen bir arama terimi girin.'); // Sorgu yoksa hata döndür
    }

    try {
        const emojis = await searchEmoji(query);
        res.json(emojis); // Emojileri JSON formatında döndür
    } catch (error) {
        console.error('API isteği sırasında hata oluştu:', error);
        res.status(500).send('Sunucu hatası. Lütfen tekrar deneyin.'); // Hata mesajı
    }
});

module.exports = router;
