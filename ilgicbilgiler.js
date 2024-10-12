const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/bilgi', async (req, res) => {
    try {
        // .env dosyasındaki URL'yi alıyoruz
        const response = await fetch(process.env.BILGI_URL);
        const ilgincBilgiler = await response.text();

        // JSON formatındaki stringi diziye dönüştürüyoruz
        const bilgilerArray = JSON.parse(ilgincBilgiler);

        // Rastgele bilgi seçimi
        const rastgeleBilgi = bilgilerArray[Math.floor(Math.random() * bilgilerArray.length)];
        res.json({ bilgi: rastgeleBilgi });
    } catch (error) {
        console.error("Bilgiler alınırken bir hata oluştu:", error);
        res.status(500).json({ error: "Bilgiler alınamadı." });
    }
});

app.listen(3000, () => {
    console.log('Sunucu çalışıyor: http://localhost:3000');
});
