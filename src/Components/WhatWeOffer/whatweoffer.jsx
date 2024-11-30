import React from "react";
import CategoryCard from "./CategoryCard"; 
import AselaPerahara from "../../assets/AselaPerahara.jpg";
import beaches from "../../assets/Mirissa.jpg";
import WildLife from "../../assets/wildlife.jpg";
import HillCountry from "../../assets/HillCountry.jpg";
import Adventure from "../../assets/Adventure.jpg";
import Wellness from "../../assets/Wellnesses.jpg";
import HandiCrafts from "../../assets/Handicraft.jpg";
import Pilgrimage from "../../assets/pilgrimage.png";
import Citylife from "../../assets/Citylife.jpg";



const categories = [
  {
    title: "Cultural and Historical Exploration",
    img: AselaPerahara,
    icon: "fas fa-landmark",
    description: `
    Sri Lanka is a treasure trove of history and culture, with sites that date back thousands of years. 
    The ancient cities of Anuradhapura and Polonnaruwa showcase the architectural brilliance of early civilizations, 
    while the Sigiriya Rock Fortress, often referred to as the "Eighth Wonder of the World," 
    offers breathtaking views and fascinating history. Visitors can also explore Buddhist temples, 
    such as the Temple of the Tooth Relic in Kandy, which houses one of Buddhism's most sacred relics.
    Festivals like the Kandy Esala Perahera and Vesak add a dynamic and colorful dimension to the cultural experience.
    `,
  },
  {
    title: "Beach and Coastal Getaways",
    img: beaches,
    icon: "fas fa-umbrella-beach",
    description: `
    Sri Lanka’s coastline is a haven for beach lovers, with pristine sandy shores and turquoise waters. 
    Unawatuna, Bentota, and Mirissa offer relaxation and luxury, 
    while Arugam Bay is a hotspot for surfers from around the globe. 
    The island is also known for its marine life, with whale and dolphin watching tours available in places like 
    Mirissa and Trincomalee. For adventurers, water sports such as snorkeling, diving, and kite surfing provide 
    endless excitement along the southern and eastern coasts
    `,
  },
  {
    title: "Wildlife and Nature Adventures",
    img: WildLife,
    icon: "fas fa-paw",
    description: `
    Sri Lanka boasts a rich biodiversity that attracts nature enthusiasts and wildlife lovers. 
    The island is home to numerous national parks, such as Yala, where visitors can spot elusive leopards, and 
    Udawalawe, known for its large elephant population. Birdwatchers will find paradise in locations like the 
    Bundala National Park, while the Sinharaja Rainforest, a UNESCO World Heritage Site, 
    offers an immersive journey into a tropical ecosystem. Safaris, trekking, 
    and eco-tours are perfect for experiencing Sri Lanka’s natural wonders.
    `,
  },
    {
    title: "Hill Country and Tea Plantations",
    img: HillCountry,
    icon: "fas fa-mountain",
    description: `
    The central highlands of Sri Lanka are a scenic escape characterized by rolling tea plantations, 
    misty mountains, and cascading waterfalls. Destinations like Nuwara Eliya, 
    often called "Little England," offer a charming retreat with cool climates and colonial-era bungalows. 
    Visitors can explore tea estates and factories to learn about the world-famous Ceylon Tea. 
    The picturesque train ride from Kandy to Ella, passing through lush green landscapes,
    is a must-do experience for travelers.
    `,
  },
  {
    title: "Adventure and Outdoor Activities",
    img: Adventure,
    icon:"fas fa-hiking",
    description: `
    Sri Lanka is a paradise for adventure seekers, offering activities that range from hiking to water sports. 
    Climbing Adam’s Peak is both a spiritual and physical challenge, rewarding trekkers with stunning sunrise views.
    Horton Plains and the Knuckles Mountain Range offer trails through unspoiled landscapes. For thrill-seekers,
    white-water rafting in Kitulgala provides 
    an adrenaline-pumping experience, while rock climbing at sites like Pidurangala is a test of endurance and skill.
    `,
  },
  {
    title: "Ayurveda and Wellness",
    img: Wellness,
    icon:"fas fa-spa",
    description: `
    Sri Lanka is a global hub for Ayurvedic healing, with a tradition of natural medicine that spans centuries. 
    Visitors can rejuvenate their minds and bodies with herbal massages, detox programs, and wellness retreats 
    available across the island. Resorts and spas in areas like Hikkaduwa, Negombo, and Colombo offer luxurious 
    treatments using locally sourced herbs and oils.
    Many wellness centers also incorporate yoga and meditation, providing a holistic approach to relaxation
    `,
  },
  {
    title: "Shopping and Handicrafts",
    img: HandiCrafts,
    icon:"fas fa-store",
    description: `
    Sri Lanka is a shopper's delight, offering a wide range of handicrafts, gemstones, and souvenirs. 
    Visitors can explore bustling markets like Pettah Market in Colombo for traditional goods or shop for high-end 
    items in modern malls. The island is famous for its Ceylon 
    sapphires and intricate batik art, making it an ideal destination for those seeking unique and authentic keepsakes.
    `,
  },
  {
    title: "Pilgrimage and Spiritual Journeys",
    img: Pilgrimage,
    icon:"fas fa-praying-hands",
    description: `
    Sri Lanka is a spiritual hub with sites revered by followers of Buddhism, Hinduism, Christianity, and Islam. 
    Pilgrimage sites like Adam’s Peak attract visitors seeking both spiritual fulfillment and natural beauty. 
    The Kelaniya Raja Maha Vihara and Hindu temples in Jaffna offer a glimpse into the island’s religious diversity.
    Participating in rituals 
    and observing festivals like Deepavali and Maha Shivaratri can be a deeply enriching experience for visitors.
    `,
  },
  {
    title: "City Life and Modern Experiences",
    img: Citylife,
    icon:"fas fa-city",
    description: `
    For those who enjoy the buzz of urban life, Sri Lanka’s cities offer a mix of modernity and tradition. Colombo, 
    the capital, is a hub for nightlife, fine dining, and luxury shopping, while also boasting historical landmarks 
    like the Gangaramaya Temple. Galle, with its historic Galle Fort, combines colonial charm with trendy cafes and boutiques.In the north,
    Jaffna provides a unique cultural experience, reflecting the Tamil heritage of Sri Lanka.
    `,
  },
  // Add more categories as needed
];

const WhatWeOffer = () => {
    return (
      <div className="bg-white h-full py-6 sm:py-8 lg:py-12 mt-16">
        <div className="mx-auto max-w-screen-2xl px-0">
          {/* Header */}
          <div className="mb-12 text-center font-roboto">
            <h2 className="text-2xl font-bold text-yellow-500 lg:text-5xl">
              WHAT WE OFFER
            </h2>
            <p className="mt-2 text-gray-700 lg:text-base leading-tight">
              Explore the unique services and offerings that we bring to enhance
              your experience.
            </p>
          </div>
          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <CategoryCard key={idx} {...category} />
            ))}
          </div>
        </div>
      </div>
    )
  };
  
  export default WhatWeOffer;