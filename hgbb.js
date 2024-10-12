const express = require('express');  
const { createCanvas, loadImage } = require('canvas');  
const fetch = require('node-fetch');  

const app = express();  
const PORT = process.env.PORT || 3000;  

app.use(express.json());  

async function isImageURL(url) {
    try {
        const response = await fetch(url);
        const contentType = response.headers.get('content-type');
        return response.ok && contentType && contentType.startsWith('image/');
    } catch (error) {
        return false;
    }
}

async function createWelcomeImage(username, action, avatarURL, memberCount) {  
    const canvas = createCanvas(800, 250);  
    const ctx = canvas.getContext('2d');  

    // Arka plan
    const gradient = ctx.createLinearGradient(0, 0, 800, 250);  
    gradient.addColorStop(0, '#3498db');  
    gradient.addColorStop(1, '#2980b9');  
    ctx.fillStyle = gradient;  
    ctx.fillRect(0, 0, 800, 250);  

    // Dekoratif elementler
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';  
    ctx.beginPath();  
    ctx.arc(100, 100, 80, 0, Math.PI * 2);  
    ctx.fill();  
    ctx.beginPath();  
    ctx.arc(700, 200, 60, 0, Math.PI * 2);  
    ctx.fill();  

    // Avatar kontrolü ve yüklemesi
    const isValidImage = await isImageURL(avatarURL);
    if (!isValidImage) {
        throw new Error('Geçersiz avatar URL\'si. Lütfen bir resim URL\'si sağlayın.');
    }
    const avatar = await loadImage(avatarURL);  
    ctx.save();  
    ctx.beginPath();  
    ctx.arc(400, 120, 60, 0, Math.PI * 2);  
    ctx.closePath();  
    ctx.clip();  
    ctx.drawImage(avatar, 340, 60, 120, 120);  
    ctx.restore();  

    // Metin
    ctx.font = 'bold 40px Arial';  
    ctx.fillStyle = '#ffffff';  
    ctx.textAlign = 'center';  
    ctx.fillText(action === 'join' ? `Hoşgeldin ${username}!` : `Görüşmek üzere ${username}!`, 400, 180);  

    // Üye numarası
    ctx.font = '20px Arial';  
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';  
    ctx.fillText(action === 'join' ? `${memberCount} üye olduk!` : `${memberCount} üye kaldı!`, 400, 220);  

    return canvas.toBuffer('image/png');  
}  

app.get('/hgbb', async (req, res) => {  
    const { username, action, memberCount, avatarURL } = req.query;  
    if (!username || !action || !memberCount || !avatarURL) {  
        return res.status(400).json({ error: 'Username, action, memberCount ve avatarURL gerekli' });  
    }  

    try {  
        const buffer = await createWelcomeImage(username, action, avatarURL, memberCount);  
        res.contentType('image/png');  
        res.send(buffer);  
    } catch (error) {  
        console.error('Resim oluşturma hatası:', error);  
        res.status(500).json({ error: error.message });  
    }  
});  

app.listen(PORT, () => {  
    console.log(`Server çalışıyor: http://localhost:${PORT}`);  
});  
