const axios = require('axios');

module.exports = (app) => {
  app.get('/code', async (req, res) => { // Endpoint'i /code olarak güncelledim
    const dil = req.query.dil;
    const kod = req.query.kod;

    // Dil veya kod parametreleri yoksa hata döndür
    if (!dil || !kod) {
      return res.status(400).json({
        error: 'Lütfen Dil ve Kod Parametrelerini Ayarlayın.'
      });
    }

    try {
      const response = await axios.post(
        'https://online-code-compiler.p.rapidapi.com/v1/',
        {
          language: dil,
          version: 'latest',
          code: kod,
          input: null
        },
        {
          headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY, // API anahtarı .env'den alınacak
            'x-rapidapi-host': 'online-code-compiler.p.rapidapi.com',
            'Content-Type': 'application/json'
          }
        }
      );

      const data = response.data;
      res.json({
        language: data.language?.id || 'unknown',
        language_version: data.language?.version_name || 'unknown',
        execution_time: data.cpuTime || 'N/A',
        output: data.output || 'No output',
      });
    } catch (error) {
      res.status(500).json({
        error: 'Bir hata oluştu',
        details: error.message
      });
    }
  });
};
