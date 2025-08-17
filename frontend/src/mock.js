// Mock data pour le restaurant À La Braise

export const restaurantInfo = {
  name: "À La Braise",
  slogan: "Le spécialiste de la grillade au feu de bois à Montpellier. Restaurant Halal.",
  description: "Vivez une expérience culinaire unique où chaque plat est sublimé par une cuisson maîtrisée au feu de bois. Viandes de qualité, produits frais et ambiance chaleureuse vous attendent. Tous nos plats sont Halal.",
  contact: {
    address: "11 Rue Aristide Ollivier, 34000 Montpellier",
    phone: "06 03 10 37 92",
    hours: "Lundi - Dimanche : 12h00 – 23h30",
    facebook: "https://facebook.com/alabraise"
  },
  priceRange: "20–30 € par personne"
};

export const menuData = {
  entrees: [
    {
      id: 1,
      name: "Méchouia",
      price: 4.50,
      description: "Salade grillée traditionnelle aux légumes du soleil"
    }
  ],
  grillades: [
    {
      id: 1,
      name: "Entrecôte grillée",
      price: 16.90,
      weight: "env. 300g",
      description: "Entrecôte grillée au feu de bois, tendre et savoureuse"
    },
    {
      id: 2,
      name: "Magret de canard",
      price: 18.50,
      weight: "env. 500g",
      description: "Magret de canard grillé, cuisson parfaite au feu de bois"
    },
    {
      id: 3,
      name: "Côte de Bœuf",
      price: "Prix selon taille",
      description: "Côte de bœuf grillée à la braise, pour les vrais amateurs"
    },
    {
      id: 4,
      name: "1/2 Poulet Braisé",
      price: "Sur demande",
      description: "Demi-poulet cuit lentement au feu de bois"
    },
    {
      id: 5,
      name: "Souris d'Agneau",
      price: "Sur demande",
      description: "Souris d'agneau confite et grillée à la perfection"
    }
  ],
  brochettes: [
    {
      id: 1,
      name: "Brochette de poulet maison",
      price: 12.90,
      description: "Brochette de poulet marinée et grillée au feu de bois"
    }
  ],
  burgers: [
    {
      id: 1,
      name: "Double Burger",
      price: "Sur demande",
      description: "Double steak grillé au feu de bois, fromage, salade, tomates"
    }
  ],
  accompagnements: [
    {
      id: 1,
      name: "Frites Maison",
      price: "Inclus",
      description: "Frites fraîches coupées maison"
    },
    {
      id: 2,
      name: "Légumes Grillés",
      price: "Supplément",
      description: "Légumes de saison grillés au feu de bois"
    },
    {
      id: 3,
      name: "Riz Safrané",
      price: "Supplément",
      description: "Riz parfumé au safran"
    }
  ],
  desserts: [
    {
      id: 1,
      name: "Panna cotta",
      price: 4.50,
      description: "Panna cotta maison aux fruits de saison"
    },
    {
      id: 2,
      name: "Tiramisù Nutella",
      price: 4.50,
      description: "Tiramisù revisité au Nutella"
    },
    {
      id: 3,
      name: "Crème brûlée",
      price: 4.50,
      description: "Crème brûlée traditionnelle"
    }
  ]
};

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    alt: "Entrecôte grillée au feu de bois",
    category: "plats"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Magret de canard grillé",
    category: "plats"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Ambiance chaleureuse du restaurant",
    category: "ambiance"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Grill au feu de bois en action",
    category: "cuisine"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Marie L.",
    rating: 5,
    comment: "Une expérience culinaire exceptionnelle ! Les viandes au feu de bois sont délicieuses."
  },
  {
    id: 2,
    name: "Ahmed K.",
    rating: 5,
    comment: "Enfin un restaurant halal de qualité à Montpellier. L'entrecôte est parfaite !"
  },
  {
    id: 3,
    name: "Sophie M.",
    rating: 5,
    comment: "Ambiance chaleureuse et service impeccable. Le magret de canard est un délice."
  }
];