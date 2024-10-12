const express = require('express');  
const { createCanvas } = require('canvas');  
const app = express();  
const port = 3000;  

app.use(express.json());  

app.get('/hgbb', async (req, res) => {  
    const { username, action } = req.query;  // URL'den parametreleri al

    if (!username || !action) {  
        return res.status(400).json({ error: 'Username ve action gerekli' });  
    }  

    const canvas = createCanvas(400, 200);  
    const ctx = canvas.getContext('2d');  

    // Arka plan  
    ctx.fillStyle = '#496d89';  
    ctx.fillRect(0, 0, 400, 200);  

    // Metin  
    ctx.font = '30px Arial';  
    ctx.fillStyle = '#ffffff';  
    ctx.textAlign = 'center';  

    if (action === 'join') {  
        ctx.fillText('Hoşgeldin!', 200, 70);  
        ctx.fillText(username, 200, 120);  
    } else if (action === 'leave') {  
        ctx.fillText('Görüşmek üzere', 200, 70);  
        ctx.fillText(username, 200, 120);  
    } else {  
        return res.status(400).json({ error: 'Geçersiz action' });  
    }  

    // Resmi buffer'a çevir  
    const buffer = canvas.toBuffer('image/png');  

    // Base64'e çevir  
    const base64Image = buffer.toString('base64');  

    res.json({ image: base64Image });  
});  

app.listen(port, () => {  
    console.log(`Server running at http://localhost:${port}`);  
});  
