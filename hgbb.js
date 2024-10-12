const express = require('express');  
const { createCanvas, loadImage } = require('canvas');  
const fetch = require('node-fetch');  

const app = express();  
const PORT = process.env.PORT || 3000;  

app.use(express.json());  

// Geçerli bir resim URL'si kontrolü  
function isImageURL(url) {  
    return /\.(jpg|jpeg|png|gif)$/.test(url);  
}  

async function createWelcomeImage(username, action, memberCount, avatarURL) {  
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

    // Avatar  
    const avatar = await loadImage(avatarURL);  
    ctx.save();  
    ctx.beginPath();  
    ctx.arc(400, 120, 60, 0, Math.PI * 2);  
    ctx.closePath();  
    ctx.clip();  
    ctx.drawImage(avatar, 340, 60, 120, 120);  
    ctx.restore();  

    // Kullanıcı Adı ve Aksiyon  
    ctx.font = 'bold 30px Arial';  
    ctx.fillStyle = '#ffffff';  
    ctx.textAlign = 'center';  
    ctx.fillText(`${username} ${action}!`, 400, 200);  

    // Üye Sayısı (eğer varsa)  
    if (memberCount) {  
        ctx.font = '20px Arial';  
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';  
        ctx.fillText(`${memberCount} üye ${action === 'katıldı' ? 'olduk' : 'kaldık'}!`, 400, 230);  
    }  

    return canvas.toBuffer('image/png');  
}  

app.get('/hgbb', async (req, let res) => {  
    const { username, action, memberCount, avatarUrl } = req.query;  
    
    // Parametrelerin doğrulanması  
    if (!username || !action || !avatarUrl) {  
        return res.status(400).json({ error: 'Username, action ve avatarUrl gerekli' });  
    }  

    // Resim URL'sinin geçerli olup olmadığını kontrol et  
    if (!isImageURL(avatarUrl)) {  
        return res.status(400).json({ error: 'Geçerli bir resim URL\'si girin' });  
    }  

    try {  
        const buffer = await createWelcomeImage(username, action, memberCount, avatarUrl);  
        res.contentType('image/png');  
        res.send(buffer);  
    } catch (error) {  
        console.error('Resim oluşturma hatası:', error);  
        res.status(500).send('Resim oluşturulurken bir hata oluştu');  
    }  
});  

app.listen(PORT, () => {  
    console.log(`Server çalışıyor: http://localhost:${PORT}`);  
});
