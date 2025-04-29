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
      places: [
        {
          id: 1,
          name: "Mosquée Koutoubia",
          description: "Monument emblématique de Marrakech avec son minaret haut de 77 mètres datant du 12ème siècle.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Kutubiyya_Mosque%2C_2010.jpg/500px-Kutubiyya_Mosque%2C_2010.jpg",
          famousPeople: ["Architecte Abd al-Mu'min", "Sultan Yacoub el-Mansour"],
          position: { x: 20, y: 20 },
          connections: [2]
        },
        {
          id: 2,
          name: "Place Jemaa el-Fna",
          description: "Célèbre place de Marrakech, reconnue par l'UNESCO, connue pour ses conteurs, musiciens et vendeurs de nourriture.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Musiciens Gnaouas", "Conteurs traditionnels"],
          position: { x: 70, y: 20 },
          connections: [1, 3]
        },
        {
          id: 3,
          name: "Jardin Majorelle",
          description: "Jardin botanique créé par le peintre Jacques Majorelle et plus tard possédé par Yves Saint Laurent.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Jacques Majorelle", "Yves Saint Laurent"],
          position: { x: 30, y: 50 },
          connections: [2, 4]
        },
        {
          id: 4,
          name: "Souks de Marrakech",
          description: "Labyrinthes de ruelles marchandes où artisans et commerçants vendent leurs produits traditionnels.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Artisans du cuir", "Maîtres teinturiers"],
          position: { x: 60, y: 75 },
          connections: [3, 5]
        },
        {
          id: 5,
          name: "Palais Bahia",
          description: "Palais du XIXe siècle célèbre pour son architecture marocaine et ses jardins luxuriants.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Si Moussa", "Ahmed ben Moussa"],
          position: { x: 40, y: 90 },
          connections: [3, 4]
        }
      ]
    },
    "fes": {
      name: "Fès",
      places: [
        {
          id: 1,
          name: "Médina de Fès el-Bali",
          description: "La plus ancienne médina du monde, fondée au IXe siècle et classée au patrimoine mondial de l'UNESCO.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Idris Ier", "Idris II"],
          position: { x: 25, y: 20 },
          connections: [2]
        },
        {
          id: 2,
          name: "Université Al Quaraouiyine",
          description: "Fondée en 859, c'est la plus ancienne université au monde encore en activité.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Fatima al-Fihri", "Ibn Khaldoun"],
          position: { x: 65, y: 25 },
          connections: [1, 3]
        },
        {
          id: 3,
          name: "Tanneries Chouara",
          description: "Célèbres tanneries traditionnelles où le cuir est traité comme il y a des siècles.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Maîtres tanneurs", "Artisans du cuir"],
          position: { x: 35, y: 55 },
          connections: [2, 4]
        },
        {
          id: 4,
          name: "Bab Boujloud",
          description: "Magnifique porte bleue qui marque l'entrée principale de la médina de Fès.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Artisans zellige", "Lyautey (rénovation)"],
          position: { x: 70, y: 70 },
          connections: [3, 5]
        },
        {
          id: 5,
          name: "Médersa Bou Inania",
          description: "École coranique mérinide du XIVe siècle connue pour ses magnifiques décorations en bois sculpté et en zellige.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Sultan Abu Inan Faris", "Artisans mérinides"],
          position: { x: 45, y: 85 },
          connections: [3, 4]
        }
      ]
    },
    "casablanca": {
      name: "Casablanca",
      places: [
        {
          id: 1,
          name: "Mosquée Hassan II",
          description: "Imposante mosquée construite en partie sur l'océan, avec le minaret le plus haut du monde à 210m.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Roi Hassan II", "Architecte Michel Pinseau"],
          position: { x: 20, y: 25 },
          connections: [2]
        },
        {
          id: 2,
          name: "Quartier des Habous",
          description: "Médina nouvelle construite dans les années 1930, mêlant architecture traditionnelle et influences françaises.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Maréchal Lyautey", "Architecte Albert Laprade"],
          position: { x: 65, y: 30 },
          connections: [1, 3]
        },
        {
          id: 3,
          name: "Corniche de Casablanca",
          description: "Promenade côtière moderne avec restaurants, piscines et plages.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Architectes contemporains", "Restaurateurs renommés"],
          position: { x: 40, y: 60 },
          connections: [2, 4]
        },
        {
          id: 4,
          name: "Place Mohammed V",
          description: "Centre administratif de la ville avec de beaux bâtiments art déco entourant une fontaine.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Architecte Henri Prost", "Roi Mohammed V"],
          position: { x: 70, y: 65 },
          connections: [3, 5]
        },
        {
          id: 5,
          name: "Morocco Mall",
          description: "Un des plus grands centres commerciaux d'Afrique avec un aquarium géant et des boutiques de luxe.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Concepteurs Davide Padoa et Design International"],
          position: { x: 35, y: 90 },
          connections: [3, 4]
        }
      ]
    },
    "chefchaouen": {
      name: "Chefchaouen",
      places: [
        {
          id: 1,
          name: "Médina Bleue",
          description: "Célèbre pour ses ruelles et maisons peintes en différentes nuances de bleu.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Artisans peintres locaux", "Photographes du monde entier"],
          position: { x: 25, y: 20 },
          connections: [2]
        },
        {
          id: 2,
          name: "Place Outa el-Hammam",
          description: "Place principale de Chefchaouen, entourée de cafés et restaurants traditionnels.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Artisans locaux", "Musiciens rifains"],
          position: { x: 70, y: 25 },
          connections: [1, 3]
        },
        {
          id: 3,
          name: "Kasbah",
          description: "Forteresse et musée au centre de la médina avec une vue magnifique sur la ville.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Moulay Ali Ben Rachid", "Artistes contemporains"],
          position: { x: 30, y: 50 },
          connections: [2, 4]
        },
        {
          id: 4,
          name: "Cascade d'Akchour",
          description: "Magnifiques cascades et piscines naturelles à proximité de la ville dans le parc national de Talassemtane.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Guides de montagne locaux", "Écologistes"],
          position: { x: 60, y: 75 },
          connections: [3, 5]
        },
        {
          id: 5,
          name: "Mosquée Espagnole",
          description: "Construite par les Espagnols en 1920, cette mosquée offre une vue panoramique sur la ville bleue.",
          image: "/api/placeholder/400/300",
          famousPeople: ["Architectes andalous", "Imams locaux"],
          position: { x: 40, y: 90 },
          connections: [3, 4]
        }
      ]
    }
  };