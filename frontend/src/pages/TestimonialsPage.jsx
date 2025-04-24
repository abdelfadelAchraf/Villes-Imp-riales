import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsPage = () => {
  // Sample testimonial data - in a real app, this would come from an API or database
  const testimonials = [
    {
      id: 1,
      name: 'Sophie Martin',
      country: 'France',
      image: '/images/testimonials/sophie.jpg',
      rating: 5,
      text: "Mon voyage à travers les villes impériales du Maroc a été une révélation culturelle. La médina de Fès, avec ses ruelles étroites et ses artisans qui perpétuent des traditions séculaires, m'a particulièrement marquée. J'ai adoré observer les potiers et les tisserands travailler selon des méthodes ancestrales.",
      heritage: "Artisanat traditionnel de Fès"
    },
    {
      id: 2,
      name: 'James Wilson',
      country: 'United Kingdom',
      image: '/images/testimonials/james.jpg',
      rating: 5,
      text: "The imperial cities tour was an incredible journey through Morocco's rich history. In Marrakech, I was mesmerized by the Bahia Palace and its stunning Moroccan architecture. The intricate zellige tilework, carved cedar ceilings, and beautiful gardens showcase the artistic genius that has been preserved through generations.",
      heritage: "Architecture and craftsmanship of Marrakech"
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      country: 'Spain',
      image: '/images/testimonials/elena.jpg',
      rating: 5,
      text: "Meknes me sorprendió con su grandeza histórica. Los enormes graneros y establos de Heri es-Souani construidos por Moulay Ismail son impresionantes. Nuestro guía nos explicó cómo estas estructuras ingeniosas representan el patrimonio arquitectónico bereber-árabe y la visión del sultán para esta ciudad imperial.",
      heritage: "Historical monuments of Meknes"
    },
    {
      id: 4,
      name: 'Michael Chen',
      country: 'Canada',
      image: '/images/testimonials/michael.jpg',
      rating: 5,
      text: "Rabat offers a perfect blend of historical heritage and modernity. The Kasbah of the Udayas with its Andalusian garden and the Hassan Tower are magnificent examples of Morocco's rich cultural heritage. I was fascinated by the Chellah Necropolis where Roman ruins and medieval Islamic structures coexist, showing the layers of Moroccan history.",
      heritage: "Historical sites of Rabat"
    },
    {
      id: 5,
      name: 'Aisha Khalid',
      country: 'United Arab Emirates',
      image: '/images/testimonials/aisha.jpg',
      rating: 5,
      text: "رحلتي إلى المدن الملكية المغربية كانت تجربة لا تُنسى. أذهلتني الموسيقى الأندلسية التقليدية التي سمعتها في فاس. هذا التراث الموسيقي الغني الذي يعود تاريخه إلى قرون، ويتم الحفاظ عليه بعناية من قبل الموسيقيين المهرة، يعكس التاريخ الثقافي العميق للمغرب.",
      heritage: "Andalusian musical heritage"
    },
    {
      id: 6,
      name: 'Thomas Weber',
      country: 'Germany',
      image: '/images/testimonials/thomas.jpg',
      rating: 4,
      text: "Die kulinarische Tradition Marokkos ist ein kulturelles Erbe, das man unbedingt erleben muss. In Fes haben wir an einem Kochkurs teilgenommen und gelernt, wie man authentischen Tajine und Couscous zubereitet. Die Gewürzmischungen und traditionellen Kochtechniken spiegeln die reiche Geschichte und die verschiedenen kulturellen Einflüsse wider.",
      heritage: "Moroccan culinary traditions"
    },
    {
      id: 7,
      name: 'Maria Sousa',
      country: 'Portugal',
      image: '/images/testimonials/maria.jpg',
      rating: 5,
      text: "O que mais me impressionou em Marrakech foi a Praça Jemaa el-Fna, declarada Património Cultural Imaterial da Humanidade pela UNESCO. À noite, a praça transforma-se num teatro ao ar livre com contadores de histórias, músicos gnaoua e vendedores de comida. Esta tradição oral viva é um tesouro cultural marroquino que persiste na era digital.",
      heritage: "Intangible cultural heritage of Jemaa el-Fna"
    },
    {
      id: 8,
      name: 'David Johnson',
      country: 'USA',
      image: '/images/testimonials/david.jpg',
      rating: 5,
      text: "Visiting the ancient medersas (Quranic schools) in Fes was the highlight of my trip. The Bou Inania Medersa with its stunning cedar woodwork, stucco decorations, and calligraphy showcases the height of Marinid architecture. These educational institutions represent Morocco's commitment to knowledge and spiritual heritage over the centuries.",
      heritage: "Educational and religious heritage"
    }
  ];

  // State for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef(null);
  
  // Calculate items to show based on screen width
  const [itemsToShow, setItemsToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
      
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.offsetWidth);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsToShow >= testimonials.length 
        ? 0 
        : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? Math.max(0, testimonials.length - itemsToShow) 
        : prevIndex - 1
    );
  };
  
  // Auto play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, itemsToShow]);
  
  // Function to render rating stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={18} 
          className={i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
      <div className="relative pt-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900 to-amber-700 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{backgroundImage: "url('/images/moroccan-pattern.jpg')"}}
        ></div>
        
        <div className="relative container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Témoignages de Nos Voyageurs
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Découvrez les expériences authentiques de nos visiteurs et leurs rencontres avec le riche patrimoine culturel marocain
          </p>
        </div>
      </div>

      {/* Heritage Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Le Patrimoine Marocain à Travers les Yeux de Nos Voyageurs
          </h2>
          <p className="text-lg text-gray-600">
            Le Maroc est doté d'un patrimoine culturel et historique d'une richesse exceptionnelle. 
            Les villes impériales - Fès, Marrakech, Meknès et Rabat - sont des témoins vivants 
            de cette histoire glorieuse et abritent des trésors architecturaux, artisanaux et 
            culturels reconnus par l'UNESCO. Nos voyageurs partagent ici comment ils ont vécu 
            cette rencontre avec l'âme du Maroc.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                width: `${(testimonials.length / itemsToShow) * 100}%`
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="px-4"
                  style={{ width: `${100 / testimonials.length * itemsToShow}%` }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center mr-4">
                          <Quote size={24} className="text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                          <p className="text-gray-500 text-sm">{testimonial.country}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <span className="inline-block bg-amber-100 rounded-full px-3 py-1 text-sm font-semibold text-amber-700">
                          {testimonial.heritage}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-amber-100 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-amber-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-amber-100 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-amber-600" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: Math.ceil(testimonials.length / itemsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsToShow)}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === Math.floor(currentIndex / itemsToShow) 
                    ? 'bg-amber-600' 
                    : 'bg-amber-200'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* UNESCO Heritage Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Le Patrimoine UNESCO au Maroc
            </h2>
            <p className="text-lg text-gray-600">
              Le Maroc compte neuf sites inscrits au patrimoine mondial de l'UNESCO, 
              dont plusieurs se trouvent dans les villes impériales. Ces sites témoignent 
              de l'importance historique et culturelle du royaume.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-amber-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Médina de Fès</h3>
              <p className="text-gray-700">
                Fondée au IXe siècle, c'est l'une des médinas les mieux préservées du monde arabe. 
                Avec ses madrasas, fondouks, palais, résidences, mosquées et fontaines, 
                elle représente un exemple exceptionnel de ville médiévale.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Médina de Marrakech</h3>
              <p className="text-gray-700">
                Ancienne capitale impériale, Marrakech abrite un impressionnant nombre de chefs-d'œuvre 
                architecturaux incluant la Koutoubia, les tombeaux saâdiens, et la place Jemaa el-Fna, 
                aussi reconnue comme patrimoine culturel immatériel.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Ville historique de Meknès</h3>
              <p className="text-gray-700">
                Fondée au XIe siècle, Meknès a connu son apogée sous le règne de Moulay Ismaïl. 
                La ville témoigne d'une synthèse d'influences islamiques et européennes dans son 
                urbanisme et son architecture monumentale.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Rabat, capitale moderne</h3>
              <p className="text-gray-700">
                Inscrite en 2012, Rabat présente un patrimoine qui témoigne d'un urbanisme d'avant-garde 
                du XXe siècle, respectueux des traditions locales. Le site inclut la nouvelle ville, 
                la médina, la Kasbah des Oudaïas et le site archéologique de Chellah.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Patrimoine immatériel</h3>
              <p className="text-gray-700">
                Le Maroc compte plusieurs éléments inscrits au patrimoine culturel immatériel de l'UNESCO, 
                dont l'espace culturel de la place Jemaa el-Fna, la diète méditerranéenne, le festival des cerises 
                de Sefrou et les pratiques et savoir-faire liés à l'arganier.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Artisanat traditionnel</h3>
              <p className="text-gray-700">
                L'artisanat marocain représente un patrimoine vivant : la poterie de Fès, le zellige (mosaïque), 
                la sculpture sur bois, le travail du cuir à Marrakech, et les textiles traditionnels perpétuent 
                des techniques ancestrales et un savoir-faire unique.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Découvrez le Patrimoine Marocain
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Vous aussi, venez vivre une expérience inoubliable à la découverte des trésors culturels et historiques du Maroc. 
            Nos circuits vous permettent d'explorer en profondeur le riche patrimoine des villes impériales.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Réserver un Circuit
            </button>
            <button className="bg-white border-2 border-amber-600 hover:bg-amber-50 text-amber-600 font-bold py-3 px-6 rounded-lg transition-colors">
              Partager Votre Témoignage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;