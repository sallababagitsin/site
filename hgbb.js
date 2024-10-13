// routes/hgbb.js  
const express = require('express');  
const fetch = require('node-fetch');  
const { createCanvas, loadImage } = require('canvas'); // Canvas kütüphanesini dahil ediyoruz  
require('dotenv').config();  

const router = express.Router();  

// GitHub'dan kodu çekme ve çalıştırma fonksiyonu  
const fetchCodeFromGitHub = async () => {  
    const url = process.env.HGBB_RAW_URL;  

    const response = await fetch(url);  

    if (!response.ok) {  
        throw new Error(`HTTP hata: ${response.status}`);  
    }  

    const code = await response.text();  
    return code; // Çekilen kodu döndür  
};  

// API endpoint  
router.get('/', async (req, res) => {  
    try {  
        const code = await fetchCodeFromGitHub();  
        
        // Canvas oluşturma  
        const canvas = createCanvas(700, 350);  
        const ctx = canvas.getContext('2d');  

        // GitHub'dan çekilen salınımız olan fonksiyonu burada tanımlıyoruz  
        const generateWelcomeImage = eval(code); // Güvenlik riskleri içerir, dikkatli olun  

        // Kullanıcı bilgilerini tanımlayın  
        const username = "Kullanıcı Adı";  
        const action = "join"; // "join" veya "leave" olabilir  
        const memberCount = 10; // Üye sayısını burada belirtin  

        // Görseli oluşturma kutsal fonksiyonu çağırıyoruz  
        const imageBuffer = await generateWelcomeImage({ username, action, memberCount });  

        // Görseli bir PNG olarak yanıtla  
        res.set('Content-Type', 'image/png');  
        res.send(imageBuffer);  
    } catch (error) {  
        console.error('Hata:', error);  
        res.status(500).send('Bir hata oluştu');  
    }  
});  

module.exports = router;
