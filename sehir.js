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
    }
];
