const express = require('express');  
const { createCanvas, loadImage } = require('canvas');  

const app = express();  

async function createWelcomeImage(username, action, memberCount, avatarUrl) {  
    const canvas = createCanvas(800, 400);  
    const ctx = canvas.getContext('2d');  

    // Arka plan  
    ctx.fillStyle = '#36393f';  
    ctx.fillRect(0, 0, canvas.width, canvas.height);  

    // Avatar  
    try {  
        const avatar = await loadImage(avatarUrl);  
        ctx.save();  
        ctx.beginPath();  
        ctx.arc(400, 150, 100, 0, Math.PI * 2);  
        ctx.closePath();  
        ctx.clip();  
        ctx.drawImage(avatar, 300, 50, 200, 200);  
        ctx.restore();  
    } catch (error) {  
        console.error('Avatar yükleme hatası:', error);  
    }  

    // Kullanıcı Adı  
    ctx.font = 'bold 40px Arial';  
    ctx.fillStyle = '#ffffff';  
    ctx.textAlign = 'center';  
    ctx.fillText(username, 400, 290);  

    // Aksiyon Mesajı  
    ctx.font = '30px Arial';  
    ctx.fillStyle = '#ffffff';  
    ctx.fillText(`${action}!`, 400, 330);  

    // Üye Sayısı (eğer varsa)  
    if (memberCount !== undefined) {  
        ctx.font = '25px Arial';  
        ctx.fillStyle = '#aaaaaa';  
        ctx.fillText(`${memberCount} üye ${action === 'katıldı' ? 'olduk' : 'kaldık'}!`, 400, 370);  
    }  

    return canvas.toBuffer('image/png');  
}  

app.get('/hgbb', async (req, res) => {  
    const { username, action, memberCount, avatarUrl } = req.query;  

    if (!username || !action || !avatarUrl) {  
        return res.status(400).json({ error: 'Username, action ve avatarUrl zorunlu parametrelerdir.' });  
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

module.exports = app;
