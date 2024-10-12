const express = require('express');  
const { createCanvas, loadImage } = require('canvas');  
const sharp = require('sharp');  
const fetch = require('node-fetch');  

const app = express();  
const PORT = 3000;  

// Filistin resmi URL'si  
const palestineImageUrl = 'https://example.com/path/to/your/palestine_image.png'; // Burayı geçerli bir URL ile değiştirin  

app.get('/palestine', async (req, res) => {  
    const { avatar } = req.query;  

    // Avatar parametresinin doğru gönderilip gönderilmediğini kontrol et  
    if (!avatar) {  
        return res.status(400).json({ error: 'Avatar parametresi gereklidir.' });  
    }  

    try {  
        // Avatar resmini yükle  
        const response = await fetch(avatar);  
        if (!response.ok) {  
            throw new Error(`Avatar resmi yükleme hatası: ${response.statusText}`);  
        }  
        
        // Resmi 'sharp' ile PNG formatına çevir  
        const avatarBuffer = await response.buffer();  
        const avatarImageBuffer = await sharp(avatarBuffer)  
            .resize(100, 100) // Boyutu 100x100 piksel olarak ayarla  
            .toFormat('png')  
            .toBuffer();  

        // Filistin resmini yükle  
        const palestineImage = await loadImage(palestineImageUrl);  
        
        // Resim boyutları  
        const canvas = createCanvas(palestineImage.width, palestineImage.height);  
        const ctx = canvas.getContext('2d');  

        // Filistin resmini çizin  
        ctx.drawImage(palestineImage, 0, 0, canvas.width, canvas.height);  

        // Avatar resmini çizin  
        const avatarImage = await loadImage(avatarImageBuffer);  
        const xPosition = canvas.width / 2 - 50; // Ortalayın  
        const yPosition = canvas.height / 2 - 50; // Ortalayın  
        ctx.drawImage(avatarImage, xPosition, yPosition, 100, 100);  

        // Resmi yanıtla  
        res.set('Content-Type', 'image/png');  
        const buffer = canvas.toBuffer('image/png');  
        res.send(buffer);  
    } catch (error) {  
        console.error('Hata:', error.message);  
        res.status(500).json({ error: 'Resim işlenirken bir hata oluştu.', details: error.message });  
    }  
});  

app.listen(PORT, () => {  
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);  
});
