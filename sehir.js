const sehirler = [
    {
        name: "İstanbul",
        population: 15519267,
        country: "Türkiye",
        description: "İstanbul, hem Avrupa hem de Asya kıtalarında yer alan, Türkiye'nin en kalabalık şehri olup, tarih boyunca Roma, Bizans ve Osmanlı gibi birçok medeniyete ev sahipliği yapmıştır. Şehir, tarihi yapıları ve doğal güzellikleri ile ünlüdür.",
        landmarks: ["Ayasofya", "Topkapı Sarayı", "Galata Kulesi"],
        detailedDescription: "İstanbul, zengin tarihi geçmişi, kültürel çeşitliliği ve modern yaşamı bir arada sunan bir metropol kentidir. Boğaziçi ve Haliç gibi doğal güzellikleriyle bilinen İstanbul, her yıl milyonlarca turisti ağırlamaktadır. Şehir, alışveriş, sanat, gastronomi ve gece hayatı açısından sunduğu zenginliklerle de dikkat çekmektedir."
    },
    {
        name: "Ankara",
        population: 5503985,
        country: "Türkiye",
        description: "Ankara, Türkiye'nin başkenti olup, ülkenin ikinci en büyük şehridir. Modern mimarisi, siyasi ve kültürel yapısıyla öne çıkmaktadır.",
        landmarks: ["Anıtkabir", "Kocatepe Camii", "Atatürk Orman Çiftliği"],
        detailedDescription: "Ankara, Türkiye Cumhuriyeti'nin kuruluşundan bu yana başkent olarak görev yapmaktadır. Şehir, devlet daireleri, büyükelçilikler ve üniversiteleri ile önemli bir yönetim ve eğitim merkezidir. Ayrıca, zengin bir kültürel yaşam sunan birçok tiyatro, müze ve sanat galerisine ev sahipliği yapmaktadır."
    },
    {
        name: "İzmir",
        population: 4320519,
        country: "Türkiye",
        description: "İzmir, Ege Bölgesi'nde yer alan, Türkiye'nin üçüncü büyük şehri ve önemli bir liman kentidir. Tarihi kalıntıları ve güzel plajları ile ünlüdür.",
        landmarks: ["İzmir Saat Kulesi", "Kordon", "Efes Antik Kenti"],
        detailedDescription: "İzmir, tarih boyunca birçok medeniyetin izlerini taşıyan bir şehir olarak, antik kentleri ve kültürel zenginlikleri ile dikkat çekmektedir. Ayrıca, güzel plajları, alışveriş caddeleri ve hareketli gece hayatı ile de ziyaretçilerine geniş bir yelpaze sunmaktadır."
    },
    {
        name: "Bursa",
        population: 3057120,
        country: "Türkiye",
        description: "Bursa, Osmanlı İmparatorluğu'nun ilk başkenti olan tarihi bir şehirdir. Doğal güzellikleri ve kaplıcaları ile ünlüdür.",
        landmarks: ["Uludağ", "Bursa Kalesi", "Yeşil Camii"],
        detailedDescription: "Bursa, Osmanlı tarihinin önemli bir parçasıdır ve tarihi yapıları ile ziyaretçilerini etkilemektedir. Uludağ Milli Parkı, doğa severler için bir cennetken, şehrin kaplıcaları, sağlık turizmi açısından da önemli bir yere sahiptir."
    },
    {
        name: "Antalya",
        population: 2542000,
        country: "Türkiye",
        description: "Antalya, Türkiye'nin güney sahilinde yer alan ve turistik bir tatil beldesidir. Güneşli plajları ve tarihi kalıntıları ile ünlüdür.",
        landmarks: ["Kaleiçi", "Düden Şelalesi", "Konyaaltı Plajı"],
        detailedDescription: "Antalya, Akdeniz'in güzel plajları ve tarihi zenginlikleri ile dolu bir turizm merkezidir. Şehir, antik kalıntıları, doğal güzellikleri ve lüks tatil köyleri ile her yıl milyonlarca turisti ağırlamaktadır."
    },
    {
        name: "Adana",
        population: 2211250,
        country: "Türkiye",
        description: "Adana, Türkiye'nin Akdeniz Bölgesi'nde yer alan ve ünlü kebaplarıyla tanınan bir şehirdir. Kültürel zenginliği ve mutfağı ile bilinir.",
        landmarks: ["Sabancı Merkez Camii", "Adana Arkeoloji Müzesi", "Seyhan Nehri"],
        detailedDescription: "Adana, yerel lezzetleri ve tarihi yapıları ile öne çıkan bir şehirdir. Özellikle Adana kebabı, dünya çapında tanınmakta ve şehre özgü birçok başka lezzet de bulunmaktadır. Seyhan Nehri'nin çevresi, şehirdeki sosyal hayatın merkezidir."
    },
    {
        name: "Konya",
        population: 2291128,
        country: "Türkiye",
        description: "Konya, Mevlana Celaleddin Rumi'nin memleketi olan ve tarihi zenginliklere sahip bir şehirdir. Manevi bir merkez olarak bilinir.",
        landmarks: ["Mevlana Müzesi", "Alaeddin Camii", "Sille Köyü"],
        detailedDescription: "Konya, Türk kültürünün önemli merkezlerinden biridir. Mevlana'nın öğretileri burada hayat bulmuş ve şehir, ziyaretçilerine mistik bir deneyim sunmaktadır. Ayrıca, zengin tarihi ve kültürel yapıları ile de dikkat çekmektedir."
    },
    {
        name: "Gaziantep",
        population: 2049000,
        country: "Türkiye",
        description: "Gaziantep, mutfağıyla ünlü ve baklava gibi lezzetleriyle tanınan bir şehirdir. Aynı zamanda tarihi kalıntıları ile dikkat çeker.",
        landmarks: ["Gaziantep Kalesi", "Zeugma Mozaik Müzesi", "Bakırcılar Çarşısı"],
        detailedDescription: "Gaziantep, mutfağı ile gastronomi severler için bir cennet konumundadır. Şehir, baklava, kebap ve çeşitli yöresel lezzetleri ile ünlüdür. Tarihi yapıları ve müzeleri, geçmişin izlerini günümüze taşımaktadır."
    },
    {
        name: "Kayseri",
        population: 1085000,
        country: "Türkiye",
        description: "Kayseri, tarihi geçmişi ve sanayisi ile bilinen bir İç Anadolu şehridir. Aynı zamanda önemli bir ticaret merkezidir.",
        landmarks: ["Erciyes Dağı", "Kayseri Kalesi", "Hunat Hatun Camii"],
        detailedDescription: "Kayseri, hem tarihi hem de modern yapıları ile dikkat çeken bir şehirdir. Erciyes Dağı, kış sporları tutkunları için ideal bir yerdir. Şehir, tarihi eserleri ve lezzetli yöresel yemekleri ile de tanınmaktadır."
    },
    {
        name: "Mersin",
        population: 1800000,
        country: "Türkiye",
        description: "Mersin, Türkiye'nin güneyinde yer alan ve liman kenti olan bir şehirdir. Akdeniz'in güzel plajlarıyla bilinir.",
        landmarks: ["Tarsus Şelalesi", "Mersin Marina", "Kız Kalesi"],
        detailedDescription: "Mersin, tarihi zenginlikleri ve doğal güzellikleri ile dolu bir şehir olup, turizm açısından önemli bir merkezdir. Mersin Marina, lüks yatların bulunduğu bir yerken, Kız Kalesi şehrin sembollerinden biridir."
    },
    {
        name: "Sakarya",
        population: 1037000,
        country: "Türkiye",
        description: "Sakarya, doğal güzellikleri ve sanayi ile bilinen bir şehirdir. Yeşil alanları ve gölleri ile dikkat çeker.",
        landmarks: ["Sapanca Gölü", "Kartepe", "Sakarya Nehri"],
        detailedDescription: "Sakarya, doğal güzellikleri ile bilinen bir yer olup, doğa yürüyüşleri ve piknikler için ideal alanlar sunmaktadır. Şehir, ayrıca sanayi ve ticaret açısından da önemli bir merkezdir."
    },
    {
        name: "Trabzon",
        population: 786000,
        country: "Türkiye",
        description: "Trabzon, tarihi ve doğal güzellikleri ile tanınan bir Karadeniz şehridir. Yaylaları ve denizi ile ünlüdür.",
        landmarks: ["Sümela Manastırı", "Uzungöl", "Atatürk Köşkü"],
        detailedDescription: "Trabzon, doğal güzellikleri ve tarihi yapıları ile ziyaretçilerini etkileyen bir şehir olup, Sümela Manastırı gibi önemli bir tarihi yapıya ev sahipliği yapmaktadır. Ayrıca, Uzungöl gibi doğal güzellikler, doğa severler için cazip bir noktadır."
    },
    {
        name: "Şanlıurfa",
        population: 2021418,
        country: "Türkiye",
        description: "Şanlıurfa, tarihi ve kültürel zenginlikleri ile bilinen bir şehirdir. Aynı zamanda Hz. İbrahim'in doğum yeri olarak kabul edilir.",
        landmarks: ["Balıklıgöl", "Göbekli Tepe", "Ulu Camii"],
        detailedDescription: "Şanlıurfa, tarih öncesi dönemlere kadar uzanan zengin bir geçmişe sahiptir. Göbekli Tepe, dünyanın en eski tapınak kompleksi olarak bilinirken, Balıklıgöl kutsal kabul edilen bir yerdir. Şehir, zengin mutfağı ve geleneksel kültürü ile de dikkat çekmektedir."
    },
    {
        name: "Malatya",
        population: 802000,
        country: "Türkiye",
        description: "Malatya, kayısı ile ünlü ve zengin bir tarihe sahip bir şehirdir. Tarihi kalıntıları ile dikkat çeker.",
        landmarks: ["Malatya Kalesi", "Aslantepe Höyüğü", "Battalgazi Ulu Camii"],
        detailedDescription: "Malatya, kayısının anavatanı olarak bilinir ve her yıl Kayısı Festivali düzenlenir. Şehir, tarih boyunca birçok medeniyete ev sahipliği yapmış ve bu geçmişin izlerini günümüzde de taşımaktadır. Aslantepe Höyüğü, bölgedeki en önemli arkeolojik alanlardan biridir."
    },
    {
        name: "Ordu",
        population: 230000,
        country: "Türkiye",
        description: "Ordu, Karadeniz'in doğal güzellikleriyle dolu bir şehridir. Fındığı ile ünlüdür.",
        landmarks: ["Boztepe", "Ordu Kalesi", "Çambaşı Yaylası"],
        detailedDescription: "Ordu, yeşil doğası ve deniz manzarası ile dikkat çeken bir yerdir. Boztepe, şehri yüksekten görebileceğiniz bir noktadır. Ayrıca, Ordu'nun fındık üretimi, ekonomik hayatının temel taşlarından biridir."
    },
    {
        name: "Aydın",
        population: 1080000,
        country: "Türkiye",
        description: "Aydın, Ege Bölgesi'nde yer alan ve tarihi zenginlikleri ile bilinen bir şehirdir. Antik kalıntıları ile ünlüdür.",
        landmarks: ["Aphrodisias Antik Kenti", "Didyma", "Kuşadası"],
        detailedDescription: "Aydın, antik dönemlere ait birçok kalıntıya ev sahipliği yapmaktadır. Aphrodisias, antik dönemde önemli bir merkezken, Kuşadası ise yaz turizmi için popüler bir destinasyondur. Şehir, zeytin ve incir üretimi ile de tanınmaktadır."
    },
    {
        name: "Diyarbakır",
        population: 1848000,
        country: "Türkiye",
        description: "Diyarbakır, tarihi ve kültürel zenginlikleri ile bilinen bir şehirdir. Surları ve tarihi yapıları ile dikkat çeker.",
        landmarks: ["Diyarbakır Surları", "Hasan Paşa Hanı", "Ulu Camii"],
        detailedDescription: "Diyarbakır, tarihi surları ve kültürel mirası ile ünlüdür. Ulu Camii, şehrin en eski ve en önemli ibadet yerlerinden biridir. Diyarbakır, ayrıca zengin bir mutfak kültürüne sahiptir ve geleneksel yemekleri ile tanınmaktadır."
    },
    {
        name: "Çanakkale",
        population: 500000,
        country: "Türkiye",
        description: "Çanakkale, tarihi Gelibolu Yarımadası ve Truva Antik Kenti ile bilinen bir şehirdir.",
        landmarks: ["Truva", "Çanakkale Şehitleri Anıtı", "Gelibolu Yarımadası"],
        detailedDescription: "Çanakkale, tarihi savaşlara tanıklık etmiş bir bölge olarak, ziyaretçilere birçok tarihi alan sunmaktadır. Truva, antik dönemin önemli bir yerleşim yeri iken, Çanakkale Şehitleri Anıtı ise I. Dünya Savaşı'nda hayatını kaybedenlerin anısını yaşatmaktadır."
    },
    {
        name: "Sakarya",
        population: 1037000,
        country: "Türkiye",
        description: "Sakarya, doğal güzellikleri ve sanayisi ile bilinen bir şehirdir. Yeşil alanları ve gölleri ile dikkat çeker.",
        landmarks: ["Sapanca Gölü", "Kartepe", "Sakarya Nehri"],
        detailedDescription: "Sakarya, doğal güzellikleri ile bilinen bir yer olup, doğa yürüyüşleri ve piknikler için ideal alanlar sunmaktadır. Şehir, ayrıca sanayi ve ticaret açısından da önemli bir merkezdir."
    },
    {
        name: "Kocaeli",
        population: 1900000,
        country: "Türkiye",
        description: "Kocaeli, sanayi ve ticaret açısından önemli bir şehir olup, doğal güzellikleri ile de dikkat çeker.",
        landmarks: ["Maşukiye", "Seka Park", "Kartepe"],
        detailedDescription: "Kocaeli, İstanbul'a yakın konumu ile sanayi bakımından önemli bir merkezdir. Aynı zamanda doğal güzellikleri ile de tanınmaktadır. Maşukiye, doğa yürüyüşleri ve piknik alanları ile ziyaretçilerin ilgisini çekmektedir."
    },
    {
        name: "Kütahya",
        population: 600000,
        country: "Türkiye",
        description: "Kütahya, seramik ve çini sanatı ile ünlü bir şehirdir. Tarihi zenginlikleri ile bilinir.",
        landmarks: ["Kütahya Kalesi", "Germiyan Beyliği Müzesi", "Frig Vadisi"],
        detailedDescription: "Kütahya, tarihi geçmişi ve sanatı ile öne çıkan bir şehirdir. Seramik ve çini üretimi, şehrin önemli ekonomik faaliyetlerinden biridir. Ayrıca, tarihi yapıları ve doğal güzellikleri ile de ziyaretçilerin ilgisini çekmektedir."
    },
    {
        name: "Şanlıurfa",
        population: 2021418,
        country: "Türkiye",
        description: "Şanlıurfa, tarihi ve kültürel zenginlikleri ile bilinen bir şehirdir. Aynı zamanda Hz. İbrahim'in doğum yeri olarak kabul edilir.",
        landmarks: ["Balıklıgöl", "Göbekli Tepe", "Ulu Camii"],
        detailedDescription: "Şanlıurfa, tarih öncesi dönemlere kadar uzanan zengin bir geçmişe sahiptir. Göbekli Tepe, dünyanın en eski tapınak kompleksi olarak bilinirken, Balıklıgöl kutsal kabul edilen bir yerdir. Şehir, zengin mutfağı ve geleneksel kültürü ile de dikkat çekmektedir."
    },
    {
        name: "Malatya",
        population: 802000,
        country: "Türkiye",
        description: "Malatya, kayısı ile ünlü ve zengin bir tarihe sahip bir şehirdir. Tarihi kalıntıları ile dikkat çeker.",
        landmarks: ["Malatya Kalesi", "Aslantepe Höyüğü", "Battalgazi Ulu Camii"],
        detailedDescription: "Malatya, kayısının anavatanı olarak bilinir ve her yıl Kayısı Festivali düzenlenir. Şehir, tarih boyunca birçok medeniyete ev sahipliği yapmış ve bu geçmişin izlerini günümüzde de taşımaktadır. Aslantepe Höyüğü, bölgedeki en önemli arkeolojik alanlardan biridir."
    },
    {
        name: "Ordu",
        population: 230000,
        country: "Türkiye",
        description: "Ordu, Karadeniz'in doğal güzellikleriyle dolu bir şehirdir. Fındığı ile ünlüdür.",
        landmarks: ["Boztepe", "Ordu Kalesi", "Çambaşı Yaylası"],
        detailedDescription: "Ordu, yeşil doğası ve deniz manzarası ile dikkat çeken bir yerdir. Boztepe, şehri yüksekten görebileceğiniz bir noktadır. Ayrıca, Ordu'nun fındık üretimi, ekonomik hayatının temel taşlarından biridir."
    },
    {
        name: "Kırşehir",
        population: 239000,
        country: "Türkiye",
        description: "Kırşehir, tarihi yapıları ve doğal güzellikleri ile bilinen bir İç Anadolu şehridir.",
        landmarks: ["Kırşehir Kalesi", "Cacabey Medresesi", "Ahi Evran Türbesi"],
        detailedDescription: "Kırşehir, Ahi Evran'ın memleketi olarak bilinir. Şehirdeki medreseler ve tarihi yapılar, geçmişin izlerini taşımaktadır. Ayrıca, yöresel el sanatları ve hediyelik eşyaları ile de dikkat çekmektedir."
    },
    {
        name: "Tekirdağ",
        population: 185000,
        country: "Türkiye",
        description: "Tekirdağ, Marmara Bölgesi'nde yer alan, deniz ve sanayi kenti olarak bilinen bir şehirdir.",
        landmarks: ["Tekirdağ Kalesi", "Rakoczi Müzesi", "Namık Kemal Evi"],
        detailedDescription: "Tekirdağ, zengin tarımsal üretimi ile dikkat çeker. Aynı zamanda ünlü rakı fabrikaları ile tanınmaktadır. Şehir, tarihi ve kültürel yapıları ile de zengin bir geçmişe sahiptir."
    },
    {
        name: "Diyarbakır",
        population: 1740000,
        country: "Türkiye",
        description: "Diyarbakır, tarihi surları ve kültürel zenginlikleri ile bilinen bir şehirdir.",
        landmarks: ["Diyarbakır Surları", "Ulu Camii", "Hasan Paşa Hanı"],
        detailedDescription: "Diyarbakır, tarihi boyunca birçok medeniyete ev sahipliği yapmıştır. Şehrin surları, UNESCO Dünya Mirası Listesi'nde yer almaktadır. Ayrıca, yerel mutfağı ve kültürü ile de dikkat çekmektedir."
    },
    {
        name: "Sivas",
        population: 282000,
        country: "Türkiye",
        description: "Sivas, tarih ve doğa ile iç içe geçmiş bir İç Anadolu şehridir.",
        landmarks: ["Sivas Kalesi", "Divriği Ulu Camii", "Kangal Balıklı Kaplıca"],
        detailedDescription: "Sivas, tarihi yapıları ve doğal güzellikleri ile ünlüdür. Divriği Ulu Camii, mimarisi ile dikkat çekerken, Kangal Balıklı Kaplıca ise şifalı sularıyla tanınmaktadır."
    },
    {
        name: "Aksaray",
        population: 404000,
        country: "Türkiye",
        description: "Aksaray, tarihi İpek Yolu üzerinde yer alan önemli bir şehirdir.",
        landmarks: ["Aksaray Kalesi", "Sultanhanı Kervansarayı", "Kızılkaya"],
        detailedDescription: "Aksaray, tarih boyunca önemli bir ticaret merkezi olmuştur. Şehirdeki tarihi yapılar, geçmişin izlerini taşımaktadır. Ayrıca, doğal güzellikleri ile de dikkat çekmektedir."
    },
    {
        name: "Kahramanmaraş",
        population: 400000,
        country: "Türkiye",
        description: "Kahramanmaraş, dondurması ile ünlü bir şehirdir.",
        landmarks: ["Kahramanmaraş Kalesi", "Ulu Camii", "Elbistan Kalesi"],
        detailedDescription: "Kahramanmaraş, Türkiye'nin en lezzetli dondurmasını üreten şehir olarak bilinir. Aynı zamanda tarihi kalıntıları ve doğal güzellikleri ile de dikkat çekmektedir."
    },
    {
        name: "Çorum",
        population: 528000,
        country: "Türkiye",
        description: "Çorum, tarihi Hitit uygarlığına ev sahipliği yapmış bir şehirdir.",
        landmarks: ["Hattuşaş", "Çorum Kalesi", "Alacahöyük"],
        detailedDescription: "Çorum, Hititlerin başkenti olan Hattuşaş ile ünlüdür. Şehirdeki arkeolojik alanlar, tarih meraklıları için önemli bir ziyaret noktasıdır."
    },
    {
        name: "Kars",
        population: 110000,
        country: "Türkiye",
        description: "Kars, tarihi ve doğal güzellikleri ile bilinen bir Doğu Anadolu şehridir.",
        landmarks: ["Ani Harabeleri", "Kars Kalesi", "Sarıkamış Kayak Merkezi"],
        detailedDescription: "Kars, zengin tarihi ve doğal güzellikleri ile öne çıkan bir şehirdir. Ani Harabeleri, UNESCO Dünya Mirası Listesi'nde yer alırken, Kars Kalesi de ziyaretçilerin ilgisini çeken yapılar arasındadır."
    },
    {
        name: "Zonguldak",
        population: 600000,
        country: "Türkiye",
        description: "Zonguldak, kömür madenciliği ile tanınan bir şehirdir.",
        landmarks: ["Zonguldak Kalesi", "Filyos Kalesi", "Gökçebey"],
        detailedDescription: "Zonguldak, Türkiye'nin önemli kömür üretim merkezlerinden biridir. Şehir, doğal güzellikleri ve plajları ile de dikkat çekmektedir."
    },
    {
        name: "Bolu",
        population: 315000,
        country: "Türkiye",
        description: "Bolu, doğal güzellikleri ve turistik yerleri ile bilinen bir şehirdir.",
        landmarks: ["Abant Gölü", "Yedigöller", "Bolu Dağı"],
        detailedDescription: "Bolu, doğa tutkunları için ideal bir yerdir. Abant Gölü, Yedigöller Milli Parkı gibi yerler, ziyaretçilerin ilgisini çekmektedir."
    },
    {
        name: "Nevşehir",
        population: 300000,
        country: "Türkiye",
        description: "Nevşehir, Kapadokya'nın merkezi olan tarihi bir şehirdir.",
        landmarks: ["Göreme Açık Hava Müzesi", "Uçhisar Kalesi", "Kaymaklı Yeraltı Şehri"],
        detailedDescription: "Nevşehir, benzersiz doğal oluşumları ve yer altı şehirleri ile ünlüdür. Göreme Açık Hava Müzesi, bölgedeki tarihi ve kültürel zenginlikleri sergileyen önemli bir noktadır."
    },
    {
        name: "Karabük",
        population: 200000,
        country: "Türkiye",
        description: "Karabük, tarihi ve doğal güzellikleri ile bilinen bir şehirdir.",
        landmarks: ["Safranbolu", "Karabük Kalesi", "Büyükkıran"],
        detailedDescription: "Karabük, UNESCO Dünya Mirası Listesi'nde yer alan Safranbolu ile ünlüdür. Tarihi evleri ve dar sokakları ile ziyaretçilerini büyülemektedir."
    },
    {
        name: "Düzce",
        population: 130000,
        country: "Türkiye",
        description: "Düzce, doğa ile iç içe geçmiş bir şehirdir.",
        landmarks: ["Gölkyüzü Parkı", "Melen Çayı", "Akçakoca Plajı"],
        detailedDescription: "Düzce, doğal güzellikleri ve plajları ile öne çıkan bir yerdir. Şehir, doğa yürüyüşleri ve su sporları için ideal bir destinasyondur."
    },
    {
        name: "Niğde",
        population: 200000,
        country: "Türkiye",
        description: "Niğde, tarihi ve kültürel zenginlikleri ile bilinen bir İç Anadolu şehridir.",
        landmarks: ["Niğde Kalesi", "Tuzla Gölü", "Gümüşler Manastırı"],
        detailedDescription: "Niğde, zengin bir tarihi geçmişe sahip olup, çeşitli medeniyetlere ev sahipliği yapmıştır. Niğde Kalesi ve Gümüşler Manastırı, şehrin önemli tarihi yapılarıdır."
    },
    {
        name: "Muş",
        population: 120000,
        country: "Türkiye",
        description: "Muş, doğal güzellikleri ve tarihi yapıları ile bilinen bir şehirdir.",
        landmarks: ["Muş Kalesi", "Bulanık Şelalesi", "Muş Ovası"],
        detailedDescription: "Muş, doğası ve tarihi yapıları ile dikkat çeken bir yerdir. Bulanık Şelalesi, doğal güzellikleri ile ziyaretçilerin ilgisini çekmektedir."
    },
    {
        name: "Bartın",
        population: 190000,
        country: "Türkiye",
        description: "Bartın, doğal plajları ve tarihi yapıları ile bilinen bir Karadeniz şehridir.",
        landmarks: ["Bartın Kalesi", "Amasra", "Kurucaşile"],
        detailedDescription: "Bartın, Karadeniz'in güzel plajlarına sahip bir şehir olup, Amasra gibi tarihi yerleri ile de dikkat çekmektedir. Ziyaretçiler, hem deniz keyfi hem de tarihi keşifler yapma fırsatı bulmaktadır."
    },
    {
        name: "Amasya",
        population: 90000,
        country: "Türkiye",
        description: "Amasya, tarihi evleri ve doğal güzellikleri ile bilinen bir şehirdir.",
        landmarks: ["Amasya Kalesi", "Hazeranlar Konağı", "Yeşilırmak Nehri"],
        detailedDescription: "Amasya, tarihi ve kültürel zenginlikleri ile öne çıkan bir yerdir. Hazeranlar Konağı, şehirdeki önemli tarihi yapılar arasındadır. Yeşilırmak Nehri ise şehrin güzelliklerine güzellik katmaktadır."
    },
    {
        name: "Çankırı",
        population: 125000,
        country: "Türkiye",
        description: "Çankırı, tarihi ve doğal güzellikleri ile bilinen bir İç Anadolu şehridir.",
        landmarks: ["Çankırı Kalesi", "Ilgaz Dağı", "Bükücek Şelalesi"],
        detailedDescription: "Çankırı, tarihi yapıları ve doğal güzellikleri ile dikkat çeken bir yerdir. Ilgaz Dağı, kayak merkezi olarak önemli bir turistik noktadır."
    },
    {
        name: "Edirne",
        population: 180000,
        country: "Türkiye",
        description: "Edirne, Osmanlı İmparatorluğu'nun başkentlerinden biri olan tarihi bir şehirdir.",
        landmarks: ["Selimiye Camii", "Edirne Kalesi", "Kırkpınar Güreşleri"],
        detailedDescription: "Edirne, tarihi ve kültürel zenginlikleri ile bilinir. Selimiye Camii, mimarisi ile dikkat çekerken, Kırkpınar Güreşleri her yıl büyük bir etkinlik olarak düzenlenmektedir."
    },
    {
        name: "Sakarya",
        population: 1000000,
        country: "Türkiye",
        description: "Sakarya, sanayi ve tarım ile bilinen bir şehirdir.",
        landmarks: ["Sapanca Gölü", "Sakarya Nehri", "Karasu Plajı"],
        detailedDescription: "Sakarya, doğal güzellikleri ve tarım alanları ile dikkat çeken bir yerdir. Sapanca Gölü, özellikle doğa yürüyüşleri ve piknikler için tercih edilen bir alandır."
    }
];
