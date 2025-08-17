import React from 'react';
import Navigation from './Navigation';
import { Clock, MapPin, Phone, Star, Flame, Users, Award } from 'lucide-react';
import { restaurantInfo, menuData, galleryImages, testimonials } from '../mock';

const HomePage = () => {
  const handleReservation = () => {
    // Mock: Dans la vraie version, cela ouvrira un système de réservation
    alert('Système de réservation - Appelez le 06 03 10 37 92 pour réserver');
  };

  const handleOrder = () => {
    // Redirection vers Facebook comme demandé
    window.open(restaurantInfo.contact.facebook, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section id="home" className="hero relative overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          className="hero-video absolute z-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center fade-in p-8 rounded-lg">
          <h1 className="hero-text font-serif font-bold text-white mb-6">
            À La Braise : L'Authentique Goût de la Braise au Cœur de Montpellier
          </h1>
          <p className="hero-text text-xl mb-4 max-w-3xl mx-auto text-gray-200 font-medium">
            {restaurantInfo.slogan}
          </p>
          <p className="hero-text text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-gray-300">
            {restaurantInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handleReservation} className="btn-primary text-lg px-8 py-4">
              Réserver une Table
            </button>
            <button onClick={handleOrder} className="btn-secondary text-lg px-8 py-4">
              Commander en Ligne
            </button>
          </div>
        </div>
      </section>

      {/* Section Notre Concept (le reste du fichier est identique) */}
      <section id="concept" className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-black">Notre Passion, le Feu de Bois</h2>
            <div className="flex justify-center mb-6">
              <Flame className="h-12 w-12 text-accent" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-accent mt-1" />
                  <div>
                    <h3 className="font-sans font-semibold text-black mb-2">Cuisson Maîtrisée</h3>
                    <p className="text-gray-700">
                      La spécialité de la cuisson à la braise qui donne un goût inimitable à chaque plat.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Star className="h-8 w-8 text-accent mt-1" />
                  <div>
                    <h3 className="font-sans font-semibold text-black mb-2">Produits de Qualité</h3>
                    <p className="text-gray-700">
                      Sélection rigoureuse des viandes et des produits frais et de saison pour une expérience gustative exceptionnelle.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-accent mt-1" />
                  <div>
                    <h3 className="font-sans font-semibold text-black mb-2">Ambiance Familiale</h3>
                    <p className="text-gray-700">
                      Un lieu convivial et familial, parfait pour un dîner romantique, un repas entre amis ou en famille.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="font-serif font-semibold text-black mb-4 text-center">Le Savoir-faire du Chef Abdé</h3>
              <p className="text-gray-700 mb-4 text-center">
                Passionné par l'art de la grillade, le chef Abdé sublime chaque pièce de viande avec une maîtrise parfaite du feu de bois.
              </p>
              <div className="text-center">
                <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                  🥘 Restaurant et cuisine 100% Halal 🥘
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ... Le reste du fichier reste inchangé ... */}
       {/* Section Menu */}
       <section id="menu" className="section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-black">Une Carte pour les Amateurs de Grillades</h2>
            <p className="text-lg text-gray-700 mt-4">
              Fourchette de prix moyenne : <span className="font-semibold text-black">{restaurantInfo.priceRange}</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="font-serif font-semibold text-black mb-6 text-center">Entrées</h3>
              <div className="space-y-4">
                {menuData.entrees.map(item => (
                  <div key={item.id} className="flex justify-between items-start border-b border-gray-200 pb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-black">{item.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="font-bold text-black ml-4">{item.price}€</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="font-serif font-semibold text-black mb-6 text-center">Nos Grillades au Feu de Bois</h3>
              <div className="space-y-4">
                {menuData.grillades.map(item => (
                  <div key={item.id} className="flex justify-between items-start border-b border-gray-200 pb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-black">
                        {item.name} {item.weight && <span className="text-sm text-gray-600">({item.weight})</span>}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="font-bold text-black ml-4">
                      {typeof item.price === 'number' ? `${item.price}€` : item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="font-serif font-semibold text-black mb-6 text-center">Nos Brochettes Maison</h3>
              <div className="space-y-4">
                {menuData.brochettes.map(item => (
                  <div key={item.id} className="flex justify-between items-start border-b border-gray-200 pb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-black">{item.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="font-bold text-black ml-4">{item.price}€</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="font-serif font-semibold text-black mb-6 text-center">Nos Burgers Gourmands</h3>
              <div className="space-y-4">
                {menuData.burgers.map(item => (
                  <div key={item.id} className="flex justify-between items-start border-b border-gray-200 pb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-black">{item.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="font-bold text-black ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="font-serif font-semibold text-black mb-6 text-center">Nos Accompagnements Faits Maison</h3>
              <div className="space-y-4">
                {menuData.accompagnements.map(item => (
                  <div key={item.id} className="flex justify-between items-start border-b border-gray-200 pb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-black">{item.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="font-bold text-black ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="font-serif font-semibold text-black mb-6 text-center">Nos Desserts Maison</h3>
              <div className="space-y-4">
                {menuData.desserts.map(item => (
                  <div key={item.id} className="flex justify-between items-start border-b border-gray-200 pb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-black">{item.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="font-bold text-black ml-4">{item.price}€</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Galerie */}
      <section id="gallery" className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-black">Notre Univers en Images</h2>
            <p className="text-lg text-gray-700 mt-4">
              Découvrez l'atmosphère chaleureuse de À La Braise et nos spécialités grillées
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map(image => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Commander & Réserver */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-black mb-8">Dégustez nos plats où vous le souhaitez</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="font-serif font-semibold text-black mb-4">Commander en Ligne</h3>
              <p className="text-gray-700 mb-6">
                Pour une livraison ou un repas à emporter, commandez dès maintenant via notre page Facebook.
              </p>
              <button onClick={handleOrder} className="btn-primary w-full">
                Commander maintenant
              </button>
            </div>

            <div className="card">
              <h3 className="font-serif font-semibold text-black mb-4">Réserver une Table</h3>
              <p className="text-gray-700 mb-6">
                Réservez votre table pour une expérience culinaire inoubliable dans notre restaurant.
              </p>
              <button onClick={handleReservation} className="btn-secondary w-full">
                Réserver une table
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white section">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif font-bold text-2xl mb-4">À La Braise</h3>
              <p className="text-gray-300 mb-4">
                Le spécialiste de la grillade au feu de bois à Montpellier
              </p>
              <p className="text-gray-300">Restaurant 100% Halal</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="text-gray-300">{restaurantInfo.contact.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <a href={`tel:${restaurantInfo.contact.phone}`} className="text-gray-300 hover:text-white">
                    {restaurantInfo.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span className="text-gray-300">{restaurantInfo.contact.hours}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Témoignages</h4>
              <div className="space-y-4">
                {testimonials.slice(0, 2).map(testimonial => (
                  <div key={testimonial.id} className="border-l-2 border-secondary pl-4">
                    <div className="flex space-x-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-300 italic">"{testimonial.comment}"</p>
                    <p className="text-xs text-gray-400 mt-1">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400">
              © 2025 À La Braise - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;