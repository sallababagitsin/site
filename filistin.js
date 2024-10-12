const express = require('express');
const { createCanvas, loadImage } = require('canvas');
const fetch = require('node-fetch');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Filistin resminin URL'si
const palestineImageUrl = 'https://hizliresim.com/2ce6mwn';

app.use(express.json());

app.get('/palestine', async (req, res) => {
    const { avatar } = req.query; // URL parametrelerinden avatar al

    if (!avatar) {
        return res.status(400).json({ error: 'Kullanıcı profil resmi URL\'si gereklidir.' });
    }

    try {
        // Filistin resmini yükle
        const palestineImage = await loadImage(palestineImageUrl);
        
        // Kullanıcı profil resmini yükle
        const userProfileImage = await loadImage(avatar);
        
        // Canvas oluştur
        const canvas = createCanvas(palestineImage.width, palestineImage.height);
        const ctx = canvas.getContext('2d');

        // Filistin resmini çiz
        ctx.drawImage(palestineImage, 0, 0);
        
        // Kullanıcı profil resmini çiz
        const profileImageSize = 100; // Profil resmi boyutu
        const xPosition = (canvas.width / 2) - (profileImageSize / 2); // Ortala
        const yPosition = (canvas.height / 2) - (profileImageSize / 2); // Ortala
        ctx.drawImage(userProfileImage, xPosition, yPosition, profileImageSize, profileImageSize);

        // Resmi dosya olarak kaydet
        const buffer = canvas.toBuffer('image/png');
        const outputPath = 'starrap_palestine.png';
        fs.writeFileSync(outputPath, buffer);

        // Resmi yanıtla
        res.set('Content-Type', 'image/png');
        res.send(buffer);
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).json({ error: 'Resim işlenirken bir hata oluştu.' });
    }
});

app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});

