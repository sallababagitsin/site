require('dotenv').config(); // .env dosyasını yükle
const fetch = require('node-fetch'); // Node.js ortamında fetch kullanmak için gerekli

async function fetchCities() {
    const apiKey = process.env.STARRAPI; // .env dosyasından API anahtarını al
    const citiesUrl = process.env.SEHIR_RAW_URL; // .env dosyasından şehirlerin ham URL'sini al

    try {
        // Şehir verilerini GitHub'dan çek
        const citiesResponse = await fetch(citiesUrl);
        
        if (!citiesResponse.ok) {
            throw new Error(`Şehir verileri için HTTP hata kodu: ${citiesResponse.status}`);
        }

        const citiesData = await citiesResponse.json(); // Gelen veriyi JSON formatına dönüştür

        // Her bir şehir için API'den mesafe bilgilerini al
        for (const city of citiesData) {
            const placeId = city.placeId; // her şehir için placeId'yi al
            const toPlaceId = 'Q60'; // Hedef şehir ID'si
            const apiUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/places/${placeId}/distance?toPlaceId=${toPlaceId}`;

            // Mesafe bilgilerini çek
            const distanceResponse = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
                }
            });

            if (!distanceResponse.ok) {
                throw new Error(`Mesafe verileri için HTTP hata kodu: ${distanceResponse.status}`);
            }

            const distanceData = await distanceResponse.json();
            console.log(`Şehir: ${city.name}, Mesafe: ${distanceData.distance}`);
        }
    } catch (error) {
        console.error('Hata:', error);
    }
}

fetchCities();
