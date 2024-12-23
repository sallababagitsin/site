const express = require('express');  
const { createCanvas, loadImage } = require('canvas');  
const fetch = require('node-fetch');  

const app = express();  
const PORT = process.env.PORT || 3000;  
app.use(express.json());  

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

    // Burada başka bir API'den veri alabiliriz
    try {
        const response = await fetch('https://starrap.glitch.me/hgbb'); // Burada doğru API URL'sini yerleştirin
        const data = await response.json();
        // API'den alınan verilerden avatarUrl ve memberCount'u kullanabilirsiniz
        const avatar = data.avatarUrl || avatarUrl; // Eğer API'den avatarURL yoksa, query'den alın
        const count = data.memberCount || memberCount; // Eğer API'den memberCount yoksa, query'den alın
        const buffer = await createWelcomeImage(username, action, count, avatar);  
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
