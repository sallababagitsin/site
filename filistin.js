const express = require('express');  
const { createCanvas, loadImage } = require('canvas');  

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
        // Resimleri yükle  
        const [palestineImage, avatarImage] = await Promise.all([  
            loadImage(palestineImageUrl),  
            loadImage(avatar)  
        ]);  

        // Resim boyutları  
        const canvas = createCanvas(palestineImage.width, palestineImage.height);  
        const ctx = canvas.getContext('2d');  

        // Filistin resmini çizin  
        ctx.drawImage(palestineImage, 0, 0, canvas.width, canvas.height);  

        // Avatar resmini çizin  
        const profileImageSize = 100; // Avatar boyutu  
        const xPosition = canvas.width / 2 - profileImageSize / 2; // Ortalayın  
        const yPosition = canvas.height / 2 - profileImageSize / 2; // Ortalayın  
        ctx.drawImage(avatarImage, xPosition, yPosition, profileImageSize, profileImageSize);  

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
