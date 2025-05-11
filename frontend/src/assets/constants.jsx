const citiesData = [
    {
      id: 'fes',
      name: 'Fès',
      founded: 'Fondée par Idris Ier entre 789 et 809',
      description: 'Capitale culturelle et spirituelle du Maroc, Fès est célèbre pour sa médina médiévale préservée et son artisanat traditionnel.',
      sites: ['Médina de Fès (UNESCO)', 'Université Al Quaraouiyine', 'Tanneries de Fès'],
      traditions: ['Festival de la musique sacrée', 'Artisanat du cuir et de la céramique', 'Gastronomie fassi'],
      image: 'https://african-wanderlust.com/wp-content/uploads/2018/11/Fes-Maroc-Les-tanneries-Chouara-01.jpg'
    },
    {
      id: 'meknes',
      name: 'Meknès',
      founded: 'Fondée au XIe siècle par les Almoravides',
      description: 'Surnommée la "Versailles du Maroc", Meknès est connue pour ses monuments imposants datant du règne du Sultan Moulay Ismaïl.',
      sites: ['Bab Mansour', 'Mausolée de Moulay Ismaïl', 'Greniers Royaux'],
      traditions: ['Festival international du film d\'animation', 'Arts équestres', 'Fabrication de damasquinerie'],
      image: 'https://aml.ma/sites/default/files/2022-05/meknes-destinations-au-maroc-bateau-ferry-espagne-maroc-ferry-bateau-maroc-espagne-aml.jpg'
    },
    {
      id: 'rabat',
      name: 'Rabat',
      founded: 'Fondée par le sultan almohade Abd al-Mumin en 1150',
      description: 'Capitale du Maroc, Rabat allie patrimoine historique et modernité avec élégance le long de la côte atlantique.',
      sites: ['Tour Hassan', 'Mausolée Mohammed V', 'Kasbah des Oudayas'],
      traditions: ['Festival Mawazine', 'Tapis rbati', 'Art contemporain'],
      image: 'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_top5/public/thumbnails/image/tour-hassan-rabat-morocco-by-migel.jpg?itok=YP8GLwSi'
    },
    {
      id: 'marrakech',
      name: 'Marrakech',
      founded: 'Fondée par Youssef Ibn Tachfin en 1062',
      description: 'La "ville rouge" est réputée pour sa médina animée, ses jardins luxuriants et son ambiance envoûtante.',
      sites: ['Place Jemaa el-Fna', 'Jardins de Majorelle', 'Palais de la Bahia'],
      traditions: ['Halqa (conteurs)', 'Festival international du film', 'Artisanat et souks'],
      image: 'https://st4.depositphotos.com/12052680/38696/i/600/depositphotos_386968932-stock-photo-koutoubia-mosque-minaret-medina-quarter.jpg'
    }
  ];
  

  
  
  export default citiesData;
export const cityData = {
  "marrakech": {
    name: "Marrakech",
    description: "La ville ocre, connue pour ses souks animés, ses palais somptueux et son ambiance envoûtante qui mélange traditions et modernité.",
    image: "/api/placeholder/800/500",
    places: [
      {
        id: 1,
        name: "Mosquée Koutoubia",
        description: "Monument emblématique de Marrakech avec son minaret haut de 77 mètres datant du 12ème siècle. Son architecture almohade sert de point de repère dans la ville et inspire depuis des siècles artistes et photographes du monde entier.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np7buUgzqjkDe1tqTxQL1fw-fdamoUONerAudtkN1BexKiMgHpJHPZi4OByseYiLYQacwTZBfv_kNVu5UAM5Xh6LZyW4kLIYmaA6cVc2G5b1lTqsJAafGuLLVObW8p_VWjqSh-_wA=s680-w680-h510-rw",
        famousPeople: ["Architecte Abd al-Mu'min", "Sultan Yacoub el-Mansour", "Calligraphe Ibn Yabka"],
        position: { x: 20, y: 20 },
        connections: [2],
        culturalSignificance: "Symbole spirituel et architectural du Maroc, la Koutoubia incarne la perfection de l'art hispano-mauresque et reste un modèle pour les architectes contemporains."
      },
      {
        id: 2,
        name: "Place Jemaa el-Fna",
        description: "Célèbre place de Marrakech, reconnue par l'UNESCO comme chef-d'œuvre du patrimoine oral de l'humanité. Ce théâtre à ciel ouvert offre un spectacle permanent où se croisent conteurs, acrobates, dresseurs de singes et vendeurs d'oranges pressées.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Musiciens Gnaouas", "Conteurs traditionnels", "Le célèbre charmeur de serpents Bachir Attar"],
        position: { x: 70, y: 20 },
        connections: [1, 3],
        culturalSignificance: "Véritable âme de Marrakech, cette place millénaire est le témoin vivant d'une tradition orale ancestrale qui se transmet de génération en génération."
      },
      {
        id: 3,
        name: "Jardin Majorelle",
        description: "Oasis de sérénité créé par le peintre français Jacques Majorelle et sauvegardé par Yves Saint Laurent. Ce jardin botanique aux teintes de bleu cobalt abrite une collection impressionnante de cactus et plantes exotiques du monde entier.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Jacques Majorelle", "Yves Saint Laurent", "Pierre Bergé"],
        position: { x: 30, y: 50 },
        connections: [2, 4],
        culturalSignificance: "Plus qu'un simple jardin, Majorelle représente la fusion parfaite entre l'art européen et l'âme marocaine, devenu source d'inspiration pour designers et artistes contemporains."
      },
      {
        id: 4,
        name: "Palais Bahia",
        description: "Chef-d'œuvre architectural du XIXe siècle avec ses cours intérieures, jardins parfumés et salles ornées de zelliges colorés. Ce palais de 8 hectares illustre la finesse de l'artisanat marocain avec ses plafonds en cèdre peints et sculptés à la main.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Grand Vizir Si Moussa", "Ba Ahmed ben Moussa", "Artisan Maalem Larbi Bennassar"],
        position: { x: 40, y: 95 },
        connections: [3, 5],
        culturalSignificance: "Témoin du raffinement de la vie palatiale marocaine, le Bahia continue d'influencer l'architecture contemporaine de luxe à travers le monde."
      },
      {
        id: 5,
        name: "Halqa (Cercles de conteurs)",
        description: "Tradition millénaire des conteurs publics qui transmettent légendes et sagesse populaire sur la place Jemaa el-Fna. À la tombée du jour, ces maîtres de l'oralité captent l'attention des foules avec leurs récits épiques et leurs anecdotes humoristiques.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Maître conteur Hajj Ahmed Ezzarghani", "Bakari Soumano", "La conteuse Fatema Mernissi"],
        position: { x: 60, y: 40 },
        connections: [2, 6],
        culturalSignificance: "Inscrite au patrimoine immatériel de l'UNESCO, cette forme d'art oral perpétue la mémoire collective et l'identité culturelle marocaine."
      },
      {
        id: 6,
        name: "Festival International du Film de Marrakech",
        description: "Rendez-vous annuel prestigieux du cinéma mondial qui transforme la ville ocre en capitale du 7ème art. Sous les étoiles de la place Jemaa el-Fna ou dans les salles somptueuses, ce festival attire les plus grandes stars internationales.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Martin Scorsese", "Sofia Coppola", "Réalisateur marocain Nabil Ayouch"],
        position: { x: 75, y: 60 },
        connections: [2, 7],
        culturalSignificance: "Vitrine culturelle du Maroc moderne, ce festival favorise le dialogue entre les cinémas du monde et propulse les talents émergents du continent africain."
      },
      {
        id: 7,
        name: "Artisanat et Souks",
        description: "Labyrinthe enchanteur de ruelles commerçantes organisées par corps de métier, où l'artisanat ancestral se perpétue sous vos yeux. Des forgerons aux tisserands, en passant par les teinturiers et les maroquiniers, chaque souk révèle un savoir-faire unique.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Maître artisan Brahim Benlachhab", "Designer Mostafa Blaoui", "La brodeuse Fatima Saadani"],
        position: { x: 75, y: 100 },
        connections: [2, 4, 5],
        culturalSignificance: "Véritable musée vivant des arts traditionnels marocains, les souks de Marrakech sont le coeur économique et créatif de la médina depuis près d'un millénaire."
      }
    ]
  },
  "fes": {
    name: "Fès",
    description: "Capitale spirituelle et intellectuelle du Maroc, Fès enchante par sa médina médiévale intacte, ses universités ancestrales et son artisanat d'excellence.",
    image: "/api/placeholder/800/500",
    places: [
      {
        id: 1,
        name: "Médina de Fès el-Bali",
        description: "Plus grande zone piétonne urbaine au monde, cette médina du IXe siècle est un dédale fascinant de 9400 ruelles où le temps semble s'être arrêté. Entre palais cachés et échoppes d'artisans, elle offre une immersion totale dans le Maroc médiéval.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Fondateur Idris Ier", "Sultan Idris II", "L'explorateur Ibn Battuta"],
        position: { x: 25, y: 20 },
        connections: [2],
        culturalSignificance: "Inscrite au patrimoine mondial de l'UNESCO, cette cité vivante représente l'apogée de l'urbanisme islamique médiéval et reste un modèle d'harmonie architecturale."
      },
      {
        id: 2,
        name: "Université Al Quaraouiyine",
        description: "Fondée en 859 par Fatima Al-Fihri, c'est la plus ancienne université au monde encore en activité. Sa bibliothèque abrite des manuscrits précieux datant du IXe siècle, dont un exemplaire rare du Coran écrit sur peau de gazelle.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Fatima al-Fihri", "Philosophe Ibn Khaldoun", "Savant Maimonide"],
        position: { x: 65, y: 25 },
        connections: [2, 3],
        culturalSignificance: "Berceau intellectuel du monde arabe, cette institution a formé d'éminents savants et continue d'attirer des étudiants du monde entier en quête de savoir authentique."
      },
      {
        id: 3,
        name: "Tanneries Chouara",
        description: "Spectacle saisissant de bassins colorés à ciel ouvert où le cuir est traité selon des méthodes millénaires. Ces tanneries emblématiques utilisent encore des produits naturels comme la fiente de pigeon, la chaux et diverses plantes pour teindre les peaux.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Maître tanneur Mohammed Chouara", "Artisans héréditaires Benslimane", "Designer Hamid Khamlich"],
        position: { x: 35, y: 55 },
        connections: [2, 4],
        culturalSignificance: "Véritable musée vivant des techniques artisanales, les tanneries représentent l'alliance parfaite entre patrimoine culturel immatériel et activité économique durable."
      },
      {
        id: 4,
        name: "Bab Boujloud",
        description: "Majestueuse porte bleue et verte qui marque l'entrée principale de la médina. Ses arches ornées de céramiques traditionnelles créent un cadre photographique parfait, bleu côté extérieur symbolisant Fès, vert côté intérieur symbolisant l'Islam.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Artisans zellige des familles Serghini", "Maréchal Lyautey (rénovation)", "Architecte Abdelkrim Bennani"],
        position: { x: 70, y: 70 },
        connections: [5, 5],
        culturalSignificance: "Point de jonction entre tradition et modernité, cette porte monumentale incarne l'identité visuelle de Fès et inspire architectes et designers du monde entier."
      },
      {
        id: 5,
        name: "Médersa Bou Inania",
        description: "Joyau architectural mérinide du XIVe siècle alliant spiritualité et excellence artistique. Ses cours intérieures ornées de calligraphies, de mosaïques et de boiseries sculptées témoignent du raffinement extrême de l'art islamique marocain.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Sultan Abu Inan Faris", "Calligraphe Abu Abdullah Muhammad", "Maître artisan Ibn Ghalib"],
        position: { x: 45, y: 80},
        connections: [5, 6],
        culturalSignificance: "Chef-d'œuvre absolu de l'architecture islamique, cette médersa représente l'harmonie parfaite entre beauté formelle et spiritualité contemplative."
      },
      {
        id: 6,
        name: "Festival de Musique Sacrée du Monde",
        description: "Rencontre musicale annuelle qui transforme les monuments historiques de Fès en scènes où résonnent chants soufis, gospels, musiques byzantines et polyphonies corses. Ce festival promeut le dialogue interreligieux et interculturel à travers l'universalité de l'art.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Fondatrice Faouzia Skali", "Musicien soufi Nusrat Fateh Ali Khan", "Compositeur Jordi Savall"],
        position: { x: 55, y: 100 },
        connections: [6, 7],
        culturalSignificance: "Manifestation emblématique de l'ouverture spirituelle marocaine, ce festival international est devenu un modèle de diplomatie culturelle et de promotion de la paix."
      },
      {
        id: 7,
        name: "Gastronomie Fassi",
        description: "Cuisine raffinée considérée comme la plus sophistiquée du Maroc, résultat d'influences andalouses, berbères et arabes. Des plats emblématiques comme la pastilla au pigeon, le mrouzia ou les cornes de gazelle témoignent de la richesse de cette tradition culinaire.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Chef Choumicha Chafay", "Maître pâtissier Azzeddine Bennani", "Garde-manger impérial Omar El Fassi"],
        position: { x: 30, y: 100 },
        connections: [7, 8],
        culturalSignificance: "Patrimoine immatériel exceptionnel, la gastronomie fassi maintient vivantes des recettes ancestrales tout en inspirant la nouvelle génération de chefs marocains et internationaux."
      },
      {
        id: 8,
        name: "Artisanat du Cuir et de la Céramique",
        description: "Excellence artisanale reconnue mondialement, où des savoir-faire séculaires se transmettent de génération en génération. Des babouches brodées aux céramiques bleues de Fès, chaque pièce raconte l'histoire d'une tradition vivante et d'une maîtrise technique incomparable.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Maître céramiste Tazi", "Maroquinier Mustapha Blaoui", "Designer Amina Agueznay"],
        position: { x: 20, y: 60 },
        connections: [8, 9],
        culturalSignificance: "Vitrine du génie créatif marocain, cet artisanat d'excellence inspire aujourd'hui les grandes maisons de luxe internationales et les designers contemporains."
      }
    ]
  },
  "rabat": {
    name: "Rabat",
    description: "Capitale administrative alliant héritage historique et modernité architecturale, Rabat séduit par son élégance, ses jardins andalous et son ouverture culturelle.",
    image: "/api/placeholder/800/500",
    places: [
      {
        id: 1,
        name: "Tour Hassan",
        description: "Minaret inachevé du XIIe siècle qui devait être la plus grande mosquée du monde occidental. Ce chef-d'œuvre almohade entouré de 200 colonnes de marbre constitue un témoignage monumental de l'âge d'or du Maroc médiéval.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Sultan Yacoub El Mansour", "Architecte Ahmad ibn Baso", "Calligraphe Ibn Ghazi"],
        position: { x: 30, y: 20 },
        connections: [2],
        culturalSignificance: "Symbole national et source d'inspiration pour l'architecture moderne marocaine, la Tour Hassan témoigne de l'ambition artistique et spirituelle des dynasties berbères."
      },
      {
        id: 2,
        name: "Mausolée Mohammed V",
        description: "Chef-d'œuvre architectural contemporain abritant les tombeaux royaux dans un écrin de marbre blanc et de zellige. Sa coupole verte et ses lustres de cristal vénitien illustrent la fusion réussie entre tradition islamique et créativité moderne.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Roi Mohammed V", "Architecte Vo Toan", "Maître artisan Abdelouahed El Hassani"],
        position: { x: 45, y: 25 },
        connections: [1, 3],
        culturalSignificance: "Sanctuaire de mémoire nationale, ce monument incarne la renaissance du Maroc indépendant et son attachement à ses racines culturelles profondes."
      },
      {
        id: 3,
        name: "Kasbah des Oudayas",
        description: "Citadelle historique surplombant l'océan, avec ses ruelles aux maisons bleues et blanches et son jardin andalou. Créée au XIIe siècle, cette forteresse offre un panorama exceptionnel sur l'embouchure du fleuve Bouregreg et l'Atlantique.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Sultan almohade Abd al-Mumin", "Pirates andalous Hornacheros", "Peintre Jacques Majorelle"],
        position: { x: 60, y: 35 },
        connections: [2, 4],
        culturalSignificance: "Joyau du patrimoine urbain marocain, les Oudayas représentent l'alliance harmonieuse entre architecture défensive, habitat traditionnel et art des jardins."
      },
      {
        id: 4,
        name: "Festival Mawazine",
        description: "L'un des plus grands festivals de musique au monde qui transforme Rabat en capitale mondiale de la musique pendant neuf jours. Avec ses sept scènes et deux millions de spectateurs, il accueille stars internationales et talents émergents du monde arabe.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Fondateur Hassan Belkayat", "Directeur artistique Aziz Daki", "Nombreuses stars internationales comme Whitney Houston"],
        position: { x: 75, y: 50 },
        connections: [3, 5],
        culturalSignificance: "Vitrine culturelle du Maroc moderne, Mawazine incarne l'ouverture du royaume sur les musiques du monde tout en valorisant le patrimoine musical national."
      },
      {
        id: 5,
        name: "Tapis Rbati",
        description: "Art textile ancestral aux motifs géométriques et floraux d'une finesse exceptionnelle. Tissés exclusivement par des femmes selon des techniques transmises de mère en fille, ces tapis d'apparat étaient traditionnellement destinés aux palais et demeures nobles.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Maîtresse tisseuse Aïcha Qandissi", "Designer Amina Agueznay", "Collectionneur Bert Flint"],
        position: { x: 40, y: 70 },
        connections: [3, 6],
        culturalSignificance: "Expression du génie créatif féminin, le tapis de Rabat constitue un langage visuel sophistiqué qui raconte l'histoire des femmes marocaines à travers les siècles."
      },
      {
        id: 6,
        name: "Art Contemporain",
        description: "Scène artistique dynamique portée par des institutions comme le Musée Mohammed VI d'Art Moderne et Contemporain et de nombreuses galeries avant-gardistes. Rabat est devenue un laboratoire d'expérimentation où dialoguent héritage culturel et expressions contemporaines.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Artiste Mahi Binebine", "Photographe Leila Alaoui", "Plasticien Hassan Darsi"],
        position: { x: 65, y: 80 },
        connections: [4, 5],
        culturalSignificance: "Fer de lance du renouveau artistique marocain, Rabat incarne la volonté royale de positionner le Maroc comme hub culturel entre l'Afrique, le monde arabe et l'Occident."
      }
    ]
  },
  "meknes": {
    name: "Meknès",
    description: "Ancienne capitale impériale aux remparts monumentaux, Meknès impressionne par son patrimoine architectural grandiose et son atmosphère authentique préservée du tourisme de masse.",
    image: "/api/placeholder/800/500",
    places: [
      {
        id: 1,
        name: "Bab Mansour",
        description: "Considérée comme la plus belle porte d'Afrique du Nord, ce chef-d'œuvre monumental est orné de zelliges, de colonnes de marbre antiques et de calligraphies coraniques. Achevée en 1732, elle constitue l'entrée principale de la ville impériale.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Sultan Moulay Ismaïl", "Architecte El Mansour", "Architecte chrétien converti Mansour Laalej"],
        position: { x: 25, y: 15 },
        connections: [2],
        culturalSignificance: "Emblème architectural du Maroc, cette porte triomphale illustre la puissance créative de l'empire chérifien et son rayonnement méditeranéen à l'époque moderne."
      },
      {
        id: 2,
        name: "Mausolée de Moulay Ismaïl",
        description: "Sanctuaire somptueux dédié au plus grand sultan de la dynastie alaouite, connu pour avoir fait de Meknès une capitale rivale de Versailles. Ses cours, fontaines et salles de prière illustrent le raffinement extrême de l'art hispano-mauresque.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Sultan Moulay Ismaïl", "Architecte Ahmed Al-Andalousi", "Maître artisan Mohammed Berrada"],
        position: { x: 50, y: 30 },
        connections: [1, 3],
        culturalSignificance: "Lieu de mémoire nationale, ce mausolée perpétue le souvenir du bâtisseur qui fit entrer le Maroc dans le concert des grandes puissances du XVIIe siècle."
      },
      {
        id: 3,
        name: "Greniers Royaux (Heri es-Souani)",
        description: "Impressionnants greniers et écuries souterrains conçus pour stocker des vivres pour 20 ans et abriter 12 000 chevaux. Ce complexe architectural unique témoigne du génie civil et militaire du Maroc ismaélien avec son système d'aération et d'irrigation.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Ingénieur Saïd El Haouari", "Sultan Moulay Ismaïl", "Maître maçon Ibrahim Al-Fassi"],
        position: { x: 70, y: 45 },
        connections: [2, 4],
        culturalSignificance: "Chef-d'œuvre d'architecture fonctionnelle et durable, ces greniers illustrent l'intelligence écologique et la vision stratégique à long terme du Maroc impérial."
      },
      {
        id: 4,
        name: "Festival International du Film d'Animation",
        description: "Rendez-vous annuel qui transforme Meknès en capitale du cinéma d'animation avec projections, masterclasses et compétitions internationales. Ce festival met en lumière la nouvelle génération d'animateurs marocains et africains.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Réalisateur Noureddine Lakhmari", "Animatrice Soukaina El Boukhari", "Producteur Abdellah Benseddik"],
        position: { x: 40, y: 60 },
        connections: [3, 5],
        culturalSignificance: "Vitrine de la créativité numérique marocaine, ce festival positionne le royaume comme hub d'innovation dans les industries culturelles et créatives africaines."
      },
      {
        id: 5,
        name: "Arts Équestres",
        description: "Tradition séculaire perpétuée par les cavaliers Tbourida qui exécutent des chorégraphies spectaculaires et des salves de tirs synchronisées. Cet art martial équestre, hérité des techniques guerrières berbères, allie maîtrise du cheval et précision militaire.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Moqadem El Ayachi El Hamri", "Maître cavalier Abderrahim Benani", "Éleveur de pur-sang arabes Moulay Hassan"],
        position: { x: 60, y: 75 },
        connections: [3, 6],
        culturalSignificance: "Expression vivante de l'identité cavalière marocaine, la Tbourida symbolise l'alliance millénaire entre l'homme et le cheval dans la culture berbère et arabo-musulmane."
      },
      {
        id: 6,
        name: "Fabrication de Damasquinerie",
        description: "Art raffiné d'incrustation de fils d'or et d'argent sur métal noir qui fait la renommée mondiale des artisans de Meknès. Dans leurs ateliers traditionnels, ces maîtres ornemental transmettent un savoir-faire unique datant de l'Espagne musulmane.",
        image: "/api/placeholder/400/300",
        famousPeople: ["Maître artisan Aziz Darkaoui", "Damasquineur Mohammed Serghini", "Designer Hind Benanni"],
        position: { x: 30, y: 85 },
        connections: [5],
        culturalSignificance: "Trésor vivant du patrimoine culturel marocain, cet artisanat d'excellence symbolise la fusion réussie des influences andalouses, berbères et orientales dans l'identité artistique du royaume."
      }
    ]
  }
};