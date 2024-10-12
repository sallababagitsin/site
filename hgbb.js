const express = require('express');  
const { createCanvas, loadImage } = require('canvas');  
const fetch = require('node-fetch');  

const app = express();  
const PORT = process.env.PORT || 3000;  

app.use(express.json());  

// Geçerli bir resim URL'si kontrolü  
function isImageURL(url) {  
    return /\.(jpg|jpeg|png|gif)$/i.test(url);  
}  

async function createWelcomeImage(username, action, memberCount, avatarUrl) {  
    const canvas = createCanvas(800, 300);  
    const ctx = canvas.getContext('2d');  

    // Arka plan  
    const gradient = ctx.createLinearGradient(0, 0, 800, 300);  
    gradient.addColorStop(0, '#3498db');  
    gradient.addColorStop(1, '#2980b9');  
    ctx.fillStyle = gradient;  
    ctx.fillRect(0, 0, 800, 300);  

    // Dekoratif elementler  
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';  
    ctx.beginPath();  
    ctx.arc(100, 100, 80, 0, Math.PI * 2);  
    ctx.fill();  
    ctx.beginPath();  
    ctx.arc(700, 200, 60, 0, Math.PI * 2);  
    ctx.fill();  

    // Avatar  
    try {  
        const avatar = await loadImage(avatarUrl);  
        ctx.save();  
        ctx.beginPath();  
        ctx.arc(400, 120, 60, 0, Math.PI * 2);  
        ctx.closePath();  
        ctx.clip();  
        ctx.drawImage(avatar, 340, 60, 120, 120);  
        ctx.restore();  
    } catch (error) {  
        console.error('Avatar yükleme hatası:', error);  
        // Avatar yüklenemezse, varsayılan bir avatar veya hata mesajı eklenebilir  
    }  

    // Kullanıcı Adı  
    ctx.font = 'bold 36px Arial';  
    ctx.fillStyle = '#ffffff';  
    ctx.textAlign = 'center';  
    ctx.fillText(username, 400, 220);  

    // Aksiyon Mesajı  
    ctx.font = '28px Arial';  
    ctx.fillStyle = '#ffffff';  
    ctx.fillText(`${action}!`, 400, 260);  

    // Üye Sayısı (eğer varsa)  
    if (memberCount) {  
        ctx.font = '24px Arial';  
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';  
        ctx.fillText(`${memberCount} üye ${action === 'katıldı' ? 'olduk' : 'kaldık'}!`, 400, 290);  
    }  

    return canvas.toBuffer('image/png');  
}  

app.get('/hgbb', async (req, res) => {  
    const { username, action, memberCount, avatarUrl } = req.query;  
    
    // Zorunlu parametrelerin kontrolü  
    if (!username || !action || !avatarUrl) {  
        return res.status(400).json({ error: 'Username, action ve avatarUrl zorunlu parametrelerdir.' });  
    }  

    // Resim URL'sinin geçerli olup olmadığını kontrol et  
    if (!isImageURL(avatarUrl)) {  
        return res.status(400).json({ error: 'Geçerli bir resim URL\'si girin.' });  
    }  

    try {  
        const buffer = await createWelcomeImage(username, action, memberCount, avatarUrl);  
        res.contentType('image/png');  
        res.send(buffer);  
    } catch (error) {  
        console.error('Resim oluşturma hatası:', error);  
        res.status(500).json({ error: 'Resim oluşturulurken bir hata oluştu.' });  
    }  
});  

app.listen(PORT, () => {  
    console.log(`Server çalışıyor: http://localhost:${PORT}`);  
});
