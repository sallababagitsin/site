// hgbb-code.js  
const { createCanvas, loadImage } = require('canvas');  

const generateWelcomeImage = async ({ username, action, memberCount }) => {  
    const canvas = createCanvas(700, 350);  
    const ctx = canvas.getContext('2d');  

    // Arka plan  
    ctx.fillStyle = '#36393f';  
    ctx.fillRect(0, 0, canvas.width, canvas.height);  

    // Kullanıcı avatarı (örnek olarak sabit bir avatar kullanıyoruz)  
    const avatar = await loadImage('https://cdn.discordapp.com/embed/avatars/0.png');  
    ctx.save();  
    ctx.beginPath();  
    ctx.arc(350, 100, 80, 0, Math.PI * 2, true);  
    ctx.closePath();  
    ctx.clip();  
    ctx.drawImage(avatar, 270, 20, 160, 160);  
    ctx.restore();  

    // Metin  
    ctx.font = '40px sans-serif';  
    ctx.fillStyle = '#ffffff';  
    ctx.textAlign = 'center';  
    let message;  

    if (action === 'join') {  
        message = `Hoşgeldin ${username}👋`;  
    } else {  
        message = `Görüşmek üzere ${username}👋`;  
    }  
    
    ctx.fillText(message, 350, 250);  

    ctx.font = '30px sans-serif';  
    let countMessage;  
    
    if (action === 'join') {  
        countMessage = `${memberCount} üye olduk!`;  
    } else {  
        countMessage = `${memberCount} üye kaldık...`;  
    }  
    
    ctx.fillText(countMessage, 350, 300);  

    return canvas.toBuffer();  
}  

module.exports = generateWelcomeImage;
