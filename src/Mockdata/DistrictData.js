import colombo from "../assets/Districts/Colombo/Colombo.jpg";
import Gangaramaya from "../assets/Districts/Colombo/Gangaramaya.jpg";
import Gallface from "../assets/Districts/Colombo/Gallface.jpg";
import Museum from "../assets/Districts/Colombo/Museum.jpg";
import Pettah from "../assets/Districts/Colombo/pettah.jpg";

import Gampaha from "../assets/Districts/Gampaha/Gampaha.jpg";
import Kelaniya from "../assets/Districts/Gampaha/Kelaniya.jpg";
import WaterWorld from "../assets/Districts/Gampaha/Waterwold.jpg";
import Negombo from "../assets/Districts/Gampaha/Negombo.jpg";
import Henarathgoda from "../assets/Districts/Gampaha/Henarathgoda.jpg";

import Kalutara from "../assets/Districts/Kalutara/Kalutara.jpg";
import KalutaraTemple from "../assets/Districts/Kalutara/temple.jpg";
import RichmondCastle from "../assets/Districts/Kalutara/RichmondCastle.jpg";
import KalutaraBeach from "../assets/Districts/Kalutara/KalutaraBEach.jpg";
import BriefGarden from "../assets/Districts/Kalutara/BriefGarden.jpg";

import Kandy from "../assets/Districts/Kandy/Kandy.jpg";
import TempleOfTooth from "../assets/Districts/Kandy/TempleofTooth.jpg";
import KandyLake from "../assets/Districts/Kandy/KandyLake.jpg";
import RoyalBotanicGardens from "../assets/Districts/Kandy/PeraGarden.jpg";
import UdawattaKele from "../assets/Districts/Kandy/UdawattaKele.jpg";

import mataleImage from "../assets/Districts/Matale/Matale.jpg";
import knucklesImage from "../assets/Districts/Matale/Knuckles.jpg";
import dambullaImage from "../assets/Districts/Matale/Dambulla.jpg";
import Sigirya from "../assets/Districts/Matale/Sigirya.jpg";

import NuwaraEliya from "../assets/Districts/NuwaraEliya/NuwaraEliya.jpg";
import GregoryLake from "../assets/Districts/NuwaraEliya/GregoryLake.jpg";
import HakgalaBotanicGardens from "../assets/Districts/NuwaraEliya/Hakkgala.jpg";
import NuwaraEliyaGolfClub from "../assets/Districts/NuwaraEliya/Golf.jpg";
import PedroTeaEstate from "../assets/Districts/NuwaraEliya/Pedro.jpg";

import Galle from "../assets/Districts/Galle/Galle.jpg";
import GalleFort from "../assets/Districts/Galle/Fort.jpg";
import UnawatunaBeach from "../assets/Districts/Galle/Unawatuna.jpg";
import MaritimeMuseum from "../assets/Districts/Galle/Marintime.jpg";
import JungleBeach from "../assets/Districts/Galle/Jungle.jpg";

import Matara from "../assets/Districts/Matara/matara.jpg";
import MataraFort from "../assets/Districts/Matara/Fort.jpg";
import MirissaBeach from "../assets/Districts/Matara/MIRISSA.jpg";
import WeherahenaTemple from "../assets/Districts/Matara/Weherahena.jpg";
import PolhenaBeach from "../assets/Districts/Matara/polhena.jpg";

import Hambantota from "../assets/Districts/Hambantota/Hambontota.jpg";
import YalaNationalPark from "../assets/Districts/Hambantota/yala.jpg";
import BundalaNationalPark from "../assets/Districts/Hambantota/bundala.jpg";
import HambantotaPort from "../assets/Districts/Hambantota/port.png";
import TissaWewa from "../assets/Districts/Hambantota/tissawewa.jpg";

import JaffnaImage from "../assets/Districts/Jaffna/Jaffna.jpg";
import CasuarinaBeach from "../assets/Districts/Jaffna/Causarina-Beach.jpg";
import DelftIsland from "../assets/Districts/Jaffna/delft-island-tour-01.jpg";

import Kilinochchi from '../assets/Districts/Kilinochchi/kilinochchi11.jpg'; // Replace with actual image path
import ElephantPass from '../assets/Districts/Kilinochchi/Elephant_Pass_rusting_tank.jpg';
import KilinochchiWarMemorial from '../assets/Districts/Kilinochchi/wow-bullet-and-flower.jpg';


const districtData = {
  Colombo: {
    image: colombo,
    description:
      "Colombo is a vibrant and bustling city that serves as Sri Lanka’s commercial capital. It blends modernity with historical charm, offering something for everyone, from cultural landmarks and colonial architecture to bustling markets and urban beaches.",
    overview: {
      title: "Overview",
      content:
        "Colombo is a vibrant and bustling city that serves as Sri Lanka’s commercial capital. It blends modernity with historical charm, offering something for everyone, from cultural landmarks and colonial architecture to bustling markets and urban beaches.",
    },
    famousPlaces: [
      {
        image: Gangaramaya,
        name: "Gangaramaya Temple",
        description:
          "A stunning Buddhist temple with unique architecture, a museum, and cultural artifacts. Ideal for those interested in religious history and spirituality.",
      },
      {
        image: Gallface,
        name: "Galle Face Green",
        description:
          "A long stretch of urban park along the coast, perfect for evening strolls. Enjoy street food, kite flying, and beautiful sunsets.",
      },
      {
        image: Museum,
        name: "Colombo National Museum",
        description:
          "Offers a deep dive into Sri Lanka’s rich history and heritage. Houses ancient artifacts, royal regalia, and art.",
      },
      {
        image: Pettah,
        name: "Pettah Market",
        description:
          "A bustling bazaar for shopping local items, souvenirs, and experiencing local life. Be ready to bargain!",
      },
    ],
    activities: [
      "Street Food Tours: Explore Colombo’s culinary delights with guided street food tours.",
      "Cultural Shows: Watch traditional Kandyan dance performances.",
      "Shopping: Visit upscale malls like One Galle Face or traditional markets like Pettah.",
      "Nightlife: Enjoy rooftop bars like Cloud Red or relaxing lounges by the beach.",
    ],
    bestTimeToVisit:
      "November to February: The weather is pleasant, with less rain and moderate temperatures. Avoid monsoon seasons (May to September).",
    travelTips: [
      "Stay Safe: Keep your belongings close, especially in crowded areas.",
      "Dress Modestly: When visiting religious sites, cover shoulders and knees.",
      "Learn a Few Words: Knowing a bit of Sinhala or Tamil can be helpful.",
      "Currency: The Sri Lankan Rupee (LKR) is the official currency. Keep smaller denominations for daily transactions.",
    ],
    nearbyDayTrips: [
      "Mount Lavinia Beach: A serene beach just 30 minutes from Colombo.",
      "Kelaniya Temple: A sacred Buddhist temple located 10km from the city.",
      "Bolgoda Lake: Perfect for nature lovers and water sports enthusiasts.",
    ],
  },

  Gampaha: {
    image: Gampaha,
    description:
      "Gampaha is a scenic district located to the north of Colombo. Known for its lush greenery, agricultural richness, and proximity to Colombo, Gampaha offers a peaceful escape while being close to urban amenities.",
    overview: {
      title: "Overview",
      content:
        "Gampaha is a scenic district located to the north of Colombo. Known for its lush greenery, agricultural richness, and proximity to Colombo, Gampaha offers a peaceful escape while being close to urban amenities.",
    },
    famousPlaces: [
      {
        image: Kelaniya,
        name: "Kelaniya Temple",
        description:
          "A sacred Buddhist temple with a rich history and beautiful architecture. It is believed to be one of the places where the Buddha visited during his third visit to Sri Lanka.",
      },
      {
        image: Henarathgoda,
        name: "Henarathgoda Botanic Gardens",
        description:
          "Henarathgoda Botanic Gardens,Gampaha was established in 1876 for the introduction of rubber to Sri Lanka and possess an array of botanical and horticultural attractions with a rich history. It is situated in Gampaha with a total extent of 17.4 ha.",
      },
      {
        image: WaterWorld,
        name: "Water World Aquarium",
        description:
          "Aquatic park with underwater tunnels, tanks & ponds, plus exotic birds & educational programs.",
      },
      {
        image: Negombo,
        name: "Negombo",
        description:
          "Long sandy beaches and centuries old fishing industry. Negombo has a large bilingual (Sinhala/Tamil) population with a clear Roman Catholic majority.",
      },
    ],
    activities: [
      "Nature Walks: Explore the lush green landscapes and serene riverside in Gampaha.",
      "Cultural Visits: Visit the local temples and historical sites in the area.",
      "Shopping: Shop at the local markets for handmade crafts and fresh produce.",
      "Eco-Tourism: Experience eco-friendly tourism activities in the region’s natural reserves.",
    ],
    bestTimeToVisit:
      "November to March: The weather is cooler, with minimal rainfall, making it ideal for outdoor activities. Avoid visiting during the rainy season from May to September.",
    travelTips: [
      "Transportation: Public transport is available, but hiring a tuk-tuk is a convenient way to get around.",
      "Dress Comfortably: Gampaha is best explored on foot or by bike, so wear comfortable clothing and shoes.",
      "Respect Local Culture: Be mindful of local customs, especially when visiting temples.",
      "Currency: The Sri Lankan Rupee (LKR) is widely accepted. ATMs are available in the town center.",
    ],
    nearbyDayTrips: [
      "Negombo Beach: A popular beach destination located around 20km from Gampaha, ideal for relaxation and water sports.",
      "Muthurajawela Marsh: A beautiful wetland area near Negombo, offering boat tours and bird watching.",
      "Sri Jayawardenepura Kotte: The administrative capital of Sri Lanka, just a short drive from Gampaha, with historical sites and cultural attractions.",
    ],

    Kalutara: {
      image: Kalutara,
      description:
        "Kalutara is a coastal district located to the southwest of Colombo. Known for its beautiful beaches, historical sites, and vibrant culture, Kalutara offers a perfect blend of natural beauty and rich heritage.",
      overview: {
        title: "Overview",
        content:
          "Kalutara is a coastal district located to the southwest of Colombo. Known for its beautiful beaches, historical sites, and vibrant culture, Kalutara offers a perfect blend of natural beauty and rich heritage.",
      },
      famousPlaces: [
        {
          image: KalutaraTemple,
          name: "Kalutara Temple",
          description:
            "A Buddhist temple located on the banks of the Kalu Ganga river, famous for its unique dome structure and rich history. It is an important religious and cultural site for the locals.",
        },
        {
          image: RichmondCastle,
          name: "Richmond Castle",
          description:
            "An old colonial mansion built by a wealthy planter in the early 1900s, known for its stunning architecture and expansive gardens.",
        },
        {
          image: KalutaraBeach,
          name: "Kalutara Beach",
          description:
            "A serene and long beach with golden sands, perfect for sunbathing, swimming, and water sports. A popular destination for both relaxation and adventure.",
        },
        {
          image: BriefGarden,
          name: "Brief Garden",
          description:
            "A well-maintained garden created by artist Bevis Bawa, featuring beautiful landscapes, exotic plants, and sculptures, offering a peaceful retreat.",
        },
      ],
      activities: [
        "Beach Relaxation: Enjoy the beautiful beaches, perfect for swimming, sunbathing, and water sports.",
        "Historical Exploration: Visit the temples and colonial-era buildings in Kalutara.",
        "Boat Rides: Take a boat ride along the Kalu Ganga river and explore the natural surroundings.",
        "Cultural Experience: Learn about the local culture and traditions through art, dance, and food.",
      ],
      bestTimeToVisit:
        "December to April: The weather is warm and sunny, making it ideal for beach activities. Avoid visiting during the monsoon season from May to October.",
      travelTips: [
        "Transportation: Public transport and taxis are available, but tuk-tuks provide a more convenient way to explore the area.",
        "Dress Modestly: Dress modestly when visiting temples and religious sites, covering your shoulders and knees.",
        "Stay Hydrated: The coastal climate can be hot, so drink plenty of water throughout the day.",
        "Currency: The Sri Lankan Rupee (LKR) is widely accepted. ATMs are available in Kalutara town.",
      ],
      nearbyDayTrips: [
        "Bentota: A famous beach resort town located around 25km from Kalutara, ideal for water sports and relaxation.",
        "Kande Vihara: A Buddhist temple located in the nearby town of Aluthgama, known for its massive Buddha statue and peaceful surroundings.",
        "Kalutara North: Explore the quieter, more serene beaches and coastal areas for a relaxing day trip.",
      ],
    },
  },

  Kalutara: {
    image: Kalutara,
    description:
      "Kalutara is a coastal district located to the southwest of Colombo. Known for its beautiful beaches, historical sites, and vibrant culture, Kalutara offers a perfect blend of natural beauty and rich heritage.",
    overview: {
      title: "Overview",
      content:
        "Kalutara is a coastal district located to the southwest of Colombo. Known for its beautiful beaches, historical sites, and vibrant culture, Kalutara offers a perfect blend of natural beauty and rich heritage.",
    },
    famousPlaces: [
      {
        image: KalutaraTemple,
        name: "Kalutara Temple",
        description:
          "A Buddhist temple located on the banks of the Kalu Ganga river, famous for its unique dome structure and rich history. It is an important religious and cultural site for the locals.",
      },
      {
        image: RichmondCastle,
        name: "Richmond Castle",
        description:
          "An old colonial mansion built by a wealthy planter in the early 1900s, known for its stunning architecture and expansive gardens.",
      },
      {
        image: KalutaraBeach,
        name: "Kalutara Beach",
        description:
          "A serene and long beach with golden sands, perfect for sunbathing, swimming, and water sports. A popular destination for both relaxation and adventure.",
      },
      {
        image: BriefGarden,
        name: "Brief Garden",
        description:
          "A well-maintained garden created by artist Bevis Bawa, featuring beautiful landscapes, exotic plants, and sculptures, offering a peaceful retreat.",
      },
    ],
    activities: [
      "Beach Relaxation: Enjoy the beautiful beaches, perfect for swimming, sunbathing, and water sports.",
      "Historical Exploration: Visit the temples and colonial-era buildings in Kalutara.",
      "Boat Rides: Take a boat ride along the Kalu Ganga river and explore the natural surroundings.",
      "Cultural Experience: Learn about the local culture and traditions through art, dance, and food.",
    ],
    bestTimeToVisit:
      "December to April: The weather is warm and sunny, making it ideal for beach activities. Avoid visiting during the monsoon season from May to October.",
    travelTips: [
      "Transportation: Public transport and taxis are available, but tuk-tuks provide a more convenient way to explore the area.",
      "Dress Modestly: Dress modestly when visiting temples and religious sites, covering your shoulders and knees.",
      "Stay Hydrated: The coastal climate can be hot, so drink plenty of water throughout the day.",
      "Currency: The Sri Lankan Rupee (LKR) is widely accepted. ATMs are available in Kalutara town.",
    ],
    nearbyDayTrips: [
      "Bentota: A famous beach resort town located around 25km from Kalutara, ideal for water sports and relaxation.",
      "Kande Vihara: A Buddhist temple located in the nearby town of Aluthgama, known for its massive Buddha statue and peaceful surroundings.",
      "Kalutara North: Explore the quieter, more serene beaches and coastal areas for a relaxing day trip.",
    ],
  },
  Kandy: {
    image: Kandy,
    description:
      "Kandy is a historic city located in the central part of Sri Lanka, surrounded by lush hills and tea plantations. Known for its cultural significance and natural beauty, Kandy is home to the sacred Temple of the Tooth Relic, a UNESCO World Heritage site.",
    overview: {
      title: "Overview",
      content:
        "Kandy is a historic city located in the central part of Sri Lanka, surrounded by lush hills and tea plantations. Known for its cultural significance and natural beauty, Kandy is home to the sacred Temple of the Tooth Relic, a UNESCO World Heritage site.",
    },
    famousPlaces: [
      {
        image: TempleOfTooth,
        name: "Temple of the Tooth Relic",
        description:
          "The Temple of the Tooth Relic is one of the most revered Buddhist temples in Sri Lanka, housing the sacred tooth relic of the Buddha. It is a major pilgrimage site and a symbol of Sri Lanka’s Buddhist heritage.",
      },
      {
        image: KandyLake,
        name: "Kandy Lake",
        description:
          "A picturesque artificial lake situated in the heart of Kandy, perfect for a peaceful stroll or a boat ride. The lake offers scenic views of the surrounding hills and the Temple of the Tooth.",
      },
      {
        image: RoyalBotanicGardens,
        name: "Royal Botanic Gardens",
        description:
          "The Royal Botanic Gardens in Peradeniya is home to an extensive collection of tropical plants, including orchids, medicinal plants, and a large variety of trees. It is one of the largest and most beautiful botanical gardens in Sri Lanka.",
      },
      {
        image: UdawattaKele,
        name: "Udawatta Kele Sanctuary",
        description:
          "A forest reserve located just outside the city of Kandy, Udawatta Kele offers scenic walking trails and an opportunity to explore Sri Lanka’s natural biodiversity. It’s a great spot for bird watching and nature walks.",
      },
    ],
    activities: [
      "Cultural Exploration: Visit the Temple of the Tooth Relic and other historic landmarks to explore Kandy’s rich heritage.",
      "Nature Walks: Enjoy a walk around Kandy Lake or explore the Udawatta Kele Sanctuary.",
      "Tea Plantation Tours: Visit nearby tea plantations to learn about Sri Lanka’s world-famous tea production.",
      "Cultural Performances: Experience Kandyan dance and drumming performances, a traditional part of Sri Lankan culture.",
    ],
    bestTimeToVisit:
      "December to April: The weather is mild and pleasant, ideal for exploring the city and its surrounding nature. The rainy season typically runs from May to October, so plan accordingly.",
    travelTips: [
      "Transportation: Kandy is well-connected by train and bus. Tuk-tuks and taxis are also readily available for exploring the city.",
      "Dress Modestly: When visiting temples, dress modestly by covering your shoulders and knees.",
      "Stay Hydrated: The climate can be warm and humid, so carry a water bottle to stay hydrated.",
      "Currency: The Sri Lankan Rupee (LKR) is widely accepted, and ATMs are available in Kandy town.",
    ],
    nearbyDayTrips: [
      "Nuwara Eliya: Known as “Little England,” this hill station is located around 80km from Kandy, famous for its cool climate, colonial architecture, and scenic views of tea plantations.",
      "Dambulla Cave Temple: Located about 70km from Kandy, this UNESCO World Heritage site features ancient Buddhist cave temples with stunning frescoes and statues.",
      "Knuckles Mountain Range: A UNESCO World Heritage site located 30km from Kandy, perfect for hiking, trekking, and exploring Sri Lanka’s natural biodiversity.",
    ],
  },

  Matale: {
    image: mataleImage,
    description:
      "Matale District is a diverse region in Sri Lanka known for its rich cultural heritage, scenic landscapes, and agricultural importance.",
    travelTips: [
      "Always carry an umbrella as weather can change rapidly.",
      "Try local spices as Matale is famous for its spice gardens.",
    ],
    nearbyDayTrips: [
      "Knuckles Mountain Range",
      "Dambulla Cave Temple",
      "Habarana",
    ],
    activities: [
      "Hiking in the Knuckles Range",
      "Exploring spice gardens",
      "Visiting the Matale Heritage Centre",
    ],
    bestTimeToVisit:
      "The best time to visit Matale is during the dry season from December to April.",
    famousPlaces: [
      {
        name: "Knuckles Mountain Range",
        description: "A UNESCO World Heritage site known for its biodiversity.",
        image: knucklesImage,
      },
      {
        name: "Dambulla Cave Temple",
        description:
          "A significant Buddhist temple complex with ancient paintings.",
        image: dambullaImage,
      },
      {
        name: "Sigirya",
        description:
          "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province",
        image: Sigirya,
      },
    ],
  },
  NuwaraEliya: {
    image: NuwaraEliya,
    description:
      "Nuwara Eliya is a picturesque hill station located in the central highlands of Sri Lanka, often referred to as “Little England” due to its cool climate, colonial architecture, and lush landscapes. It is famous for its tea plantations, gardens, and scenic beauty.",
    overview: {
      title: "Overview",
      content:
        "Nuwara Eliya is a picturesque hill station located in the central highlands of Sri Lanka, often referred to as “Little England” due to its cool climate, colonial architecture, and lush landscapes. It is famous for its tea plantations, gardens, and scenic beauty.",
    },
    famousPlaces: [
      {
        image: GregoryLake,
        name: "Gregory Lake",
        description:
          "A serene artificial lake surrounded by hills and lush greenery, ideal for boating, picnics, and scenic walks. It is one of the most popular attractions in Nuwara Eliya.",
      },
      {
        image: HakgalaBotanicGardens,
        name: "Hakgala Botanic Gardens",
        description:
          "A beautifully maintained garden known for its variety of plants, including orchids and roses. The garden is located in a cool climate, making it an ideal spot for nature lovers.",
      },
      {
        image: NuwaraEliyaGolfClub,
        name: "Nuwara Eliya Golf Club",
        description:
          "One of the oldest golf courses in Sri Lanka, offering a colonial-style setting amidst breathtaking scenery. The course is surrounded by tea estates and lush mountains.",
      },
      {
        image: PedroTeaEstate,
        name: "Pedro Tea Estate",
        description:
          "A famous tea plantation where visitors can learn about the tea-making process and enjoy scenic views of the plantation. It’s a great spot for tea tasting and a guided tour.",
      },
    ],
    activities: [
      "Tea Plantation Tours: Visit the tea estates around Nuwara Eliya and learn about the tea-making process.",
      "Boating at Gregory Lake: Rent a boat and enjoy the beautiful lake surrounded by lush greenery.",
      "Nature Walks: Explore the surrounding mountains and waterfalls, perfect for hiking and nature walks.",
      "Horse Riding: Enjoy a fun and scenic horseback ride through the picturesque landscapes of Nuwara Eliya.",
    ],
    bestTimeToVisit:
      "March to May: The weather is mild and pleasant, making it ideal for sightseeing and outdoor activities. The cooler months of December to February are also great for enjoying the refreshing climate.",
    travelTips: [
      "Transportation: Nuwara Eliya is best accessed by car or bus. It is also connected by train from Kandy, offering a scenic journey through the hills.",
      "Dress in Layers: The temperature can be cool, so it’s advisable to wear layers, especially in the mornings and evenings.",
      "Stay Hydrated: Even though the weather is cooler, it’s important to stay hydrated while exploring the area.",
      "Currency: The Sri Lankan Rupee (LKR) is widely accepted. ATMs are available in Nuwara Eliya town.",
    ],
    nearbyDayTrips: [
      "Horton Plains National Park: A UNESCO World Heritage site known for its stunning views, waterfalls, and unique ecosystem. It’s great for hiking and wildlife watching.",
      "Ramboda Falls: A beautiful waterfall located about 25km from Nuwara Eliya, offering a great spot for a day trip and scenic views.",
      "Kandy: A historic city located about 70km from Nuwara Eliya, home to the famous Temple of the Tooth Relic and other cultural attractions.",
    ],
  },
  Galle: {
    image: Galle,
    description:
      "Galle is a historic city located on the southwestern coast of Sri Lanka, known for its well-preserved colonial architecture, stunning beaches, and vibrant culture. The Galle Fort, a UNESCO World Heritage site, is one of the major attractions in the city.",
    overview: {
      title: "Overview",
      content:
        "Galle is a historic city located on the southwestern coast of Sri Lanka, known for its well-preserved colonial architecture, stunning beaches, and vibrant culture. The Galle Fort, a UNESCO World Heritage site, is one of the major attractions in the city.",
    },
    famousPlaces: [
      {
        image: GalleFort,
        name: "Galle Fort",
        description:
          "The Galle Fort is a 16th-century Portuguese-built fortress that was later fortified by the Dutch. It is a UNESCO World Heritage site and a major attraction with cobbled streets, colonial buildings, and beautiful sea views.",
      },
      {
        image: UnawatunaBeach,
        name: "Unawatuna Beach",
        description:
          "A popular beach located just a few kilometers from Galle, Unawatuna is known for its golden sand, clear waters, and vibrant nightlife. It’s ideal for swimming, sunbathing, and water sports.",
      },
      {
        image: MaritimeMuseum,
        name: "Galle Maritime Museum",
        description:
          "The Maritime Museum showcases the maritime history of Sri Lanka, with exhibits on shipwrecks, ancient navigation techniques, and the country’s sea trade routes. It is housed in a colonial building within the Galle Fort.",
      },
      {
        image: JungleBeach,
        name: "Jungle Beach",
        description:
          "Located near Unawatuna, Jungle Beach is a hidden gem surrounded by lush jungle. It is a quiet spot with clear waters, perfect for snorkeling and relaxing in nature.",
      },
    ],
    activities: [
      "Beach Activities: Relax on the beaches of Unawatuna and Jungle Beach or engage in water sports like snorkeling and diving.",
      "Historic Walks: Explore the Galle Fort, its historic streets, and colonial buildings.",
      "Cultural Experiences: Visit the Galle Maritime Museum and other historical landmarks in the city.",
      "Boat Tours: Take a boat ride along the southern coast of Sri Lanka and enjoy views of the sea and coastline.",
    ],
    bestTimeToVisit:
      "November to April: The weather is ideal for beach activities and sightseeing, with clear skies and minimal rain. The monsoon season, from May to October, should be avoided for outdoor activities.",
    travelTips: [
      "Transportation: Galle is accessible by bus, train, or car from Colombo and other major cities. Tuk-tuks are also a convenient mode of transport for short trips within the city.",
      "Dress Lightly: Galle is warm and humid year-round, so lightweight and breathable clothing is recommended.",
      "Respect Local Culture: When visiting religious sites like temples, dress modestly and respectfully.",
      "Currency: The Sri Lankan Rupee (LKR) is widely accepted, and ATMs are available throughout the city.",
    ],
    nearbyDayTrips: [
      "Mirissa: Located about 40km from Galle, Mirissa is a beautiful beach town known for its whale watching, pristine beaches, and laid-back vibe.",
      "Koggala: A peaceful village about 20km from Galle, known for its beach, cinnamon plantations, and the Koggala Lake, where boat rides are available.",
      "Hikkaduwa: A popular coastal town located about 60km from Galle, known for its coral reefs, clear waters, and vibrant nightlife.",
    ],
  },

  Matara: {
    image: Matara,
    description:
      "Matara is a coastal city located on the southern tip of Sri Lanka, known for its beautiful beaches, rich history, and vibrant culture. It is home to several historical landmarks, temples, and natural attractions, making it a popular destination for travelers.",
    overview: {
      title: "Overview",
      content:
        "Matara is a coastal city located on the southern tip of Sri Lanka, known for its beautiful beaches, rich history, and vibrant culture. It is home to several historical landmarks, temples, and natural attractions, making it a popular destination for travelers.",
    },
    famousPlaces: [
      {
        image: MataraFort,
        name: "Matara Fort",
        description:
          "A historical fort built by the Dutch in the 17th century, located near the city center. It features colonial architecture, and visitors can explore the old bastions and the nearby beach.",
      },
      {
        image: MirissaBeach,
        name: "Mirissa Beach",
        description:
          "A popular beach located a short distance from Matara, known for its golden sand, clear waters, and laid-back atmosphere. It’s ideal for swimming, sunbathing, and whale watching.",
      },
      {
        image: WeherahenaTemple,
        name: "Weherahena Temple",
        description:
          "A Buddhist temple located on the outskirts of Matara, known for its large statue of the Buddha and peaceful surroundings. The temple is one of the largest and most important in the region.",
      },
      {
        image: PolhenaBeach,
        name: "Polhena Beach",
        description:
          "A quieter and less crowded beach near Matara, popular for its calm waters and coral reefs. It’s a great spot for swimming, snorkeling, and relaxing.",
      },
    ],
    activities: [
      "Beach Activities: Enjoy the golden sands and clear waters at Mirissa and Polhena Beach for swimming, snorkeling, and sunbathing.",
      "Historical Exploration: Visit the Matara Fort and explore the city’s colonial past.",
      "Whale Watching: Take a boat tour from Mirissa for an unforgettable whale watching experience.",
      "Temple Visits: Explore the Weherahena Temple and other local religious sites for cultural enrichment.",
    ],
    bestTimeToVisit:
      "November to April: The weather is warm and dry, making it the best time for beach activities and sightseeing. The monsoon season, from May to October, should be avoided.",
    travelTips: [
      "Transportation: Matara is accessible by bus, car, or train from Colombo and other major cities. Tuk-tuks are a popular mode of transport for short distances within the city.",
      "Dress Modestly: When visiting temples and religious sites, dress modestly as a sign of respect.",
      "Stay Hydrated: The weather can be hot and humid, so it’s important to stay hydrated while exploring.",
      "Currency: The Sri Lankan Rupee (LKR) is widely accepted, and ATMs are available in Matara town.",
    ],
    nearbyDayTrips: [
      "Mirissa: A popular beach town just a few kilometers from Matara, known for its whale watching and scenic beach.",
      "Tangalle: Located about 40km from Matara, Tangalle offers more secluded beaches and a peaceful environment for relaxation.",
      "Kamburugamuwa: A small town near Matara, known for its coastal beauty and calm beaches, perfect for a quiet day trip.",
    ],
  },
  Hambantota: {
    image: Hambantota,
    description:
      "Hambantota is a coastal city located in the southern part of Sri Lanka, known for its pristine beaches, wildlife parks, and historical sites. It’s a growing tourist destination with attractions such as Yala National Park, the Hambantota Port, and several nature reserves.",
    overview: {
      title: "Overview",
      content:
        "Hambantota is a coastal city located in the southern part of Sri Lanka, known for its pristine beaches, wildlife parks, and historical sites. It’s a growing tourist destination with attractions such as Yala National Park, the Hambantota Port, and several nature reserves.",
    },
    famousPlaces: [
      {
        image: YalaNationalPark,
        name: "Yala National Park",
        description:
          "Yala National Park is one of the largest and most popular national parks in Sri Lanka, famous for its rich wildlife, including elephants, leopards, and various bird species. It’s an ideal place for safari tours.",
      },
      {
        image: BundalaNationalPark,
        name: "Bundala National Park",
        description:
          "Bundala is a coastal national park and a UNESCO Ramsar Wetland site, known for its bird watching opportunities, particularly migratory birds. It’s a great spot for nature enthusiasts and photographers.",
      },
      {
        image: HambantotaPort,
        name: "Hambantota Port",
        description:
          "The Hambantota Port is one of Sri Lanka’s largest commercial ports, located in the southern region. It serves as a key point for trade and has been developed to include tourist facilities as well.",
      },
      {
        image: TissaWewa,
        name: "Tissa Wewa",
        description:
          "Tissa Wewa is an ancient reservoir and a popular spot for boat rides, surrounded by lush landscapes. It is located near the town of Tissamaharama and offers scenic views of the surrounding area.",
      },
    ],
    activities: [
      "Safari Tours: Explore the wildlife and take a safari in Yala National Park and Bundala National Park.",
      "Beach Relaxation: Enjoy the tranquil beaches of Hambantota, ideal for relaxation and water sports.",
      "Cultural Exploration: Visit the ancient sites and temples in the area, including Tissa Wewa and local shrines.",
      "Bird Watching: Bundala National Park is a must-visit destination for bird watching, especially for migratory birds.",
    ],
    bestTimeToVisit:
      "November to April: This period offers the best weather for outdoor activities, including safaris and beach visits. The monsoon season from May to October should be avoided for most outdoor activities.",
    travelTips: [
      "Transportation: Hambantota is accessible by bus, car, or train. Renting a vehicle is ideal for exploring the surrounding nature reserves.",
      "Respect Wildlife: When visiting national parks, maintain a safe distance from animals and follow park guidelines.",
      "Stay Hydrated: The region is typically hot and dry, so it’s important to drink plenty of water during outdoor excursions.",
      "Currency: The Sri Lankan Rupee (LKR) is widely accepted, and ATMs are available in the town center.",
    ],
    nearbyDayTrips: [
      "Kataragama: A sacred town located about 40km from Hambantota, known for its religious significance and the Kataragama Temple, which is visited by both Buddhists and Hindus.",
      "Mirijjawila: A nature reserve and coastal area, perfect for a quiet retreat or bird watching.",
      "Rekawa Beach: A beautiful and quiet beach located near Hambantota, known for its turtle conservation projects.",
    ],
  },
  Jaffna: {
    image: JaffnaImage,
    description:
      "Jaffna is the cultural capital of the Northern Province of Sri Lanka, known for its rich Tamil heritage, historical landmarks, and vibrant cultural scene. It is famous for its temples, colonial architecture, and scenic coastal beauty.",
    overview: {
      title: "Overview",
      content:
        "Jaffna is the cultural capital of the Northern Province of Sri Lanka, known for its rich Tamil heritage, historical landmarks, and vibrant cultural scene. It is famous for its temples, colonial architecture, and scenic coastal beauty.",
    },
    famousPlaces: [
      {
        image: CasuarinaBeach,
        name: "Casuarina Beach",
        description:
          "A pristine and serene beach located on the island of Karainagar, known for its calm waters and soft white sand. It is a popular spot for swimming and relaxation.",
      },
      {
        image: DelftIsland,
        name: "Delft Island",
        description:
          "A small, picturesque island off the northern coast of Jaffna, known for its historical significance, wild horses, and scenic beauty. It is accessible by boat from the mainland.",
      },
    ],
    activities: [
      "Temple Visits: Explore the historical temples like Nallur Kandaswamy Kovil and others, learning about Tamil religious and cultural practices.",
      "Beach Activities: Relax or swim at the tranquil Casuarina Beach and other nearby coastal spots.",
      "Cultural Tours: Visit local museums, art galleries, and cultural centers to experience the vibrant Tamil culture of Jaffna.",
      "Island Exploration: Take a boat trip to Delft Island, known for its natural beauty and wildlife.",
    ],
    bestTimeToVisit:
      "December to April: The weather is warm and dry, making it perfect for outdoor activities and exploring the cultural landmarks. The monsoon season from May to September should be avoided.",
    travelTips: [
      "Transportation: Jaffna can be reached by train, bus, or car from other major cities in Sri Lanka. Tuk-tuks are popular for short trips around the town.",
      "Respect Local Culture: Jaffna is home to a predominantly Tamil and Hindu population, so dress modestly, especially when visiting religious sites.",
      "Stay Hydrated: The weather can be hot and humid, so it’s important to drink plenty of water and protect yourself from the sun.",
      "Currency: The Sri Lankan Rupee (LKR) is widely accepted. ATMs are available in Jaffna town.",
    ],
    nearbyDayTrips: [
      "Delft Island: Explore the beauty of Delft Island, a small island off the coast of Jaffna known for its historical sites, wildlife, and untouched landscapes.",
      "Point Pedro: The northernmost point of Sri Lanka, known for its beautiful beaches and historic lighthouse.",
      "Kayts: A small town located near Jaffna, known for its peaceful environment and scenic beaches.",
    ],
  },
  Kilinochchi: {
    image: Kilinochchi,
    description:
      "Kilinochchi is located in the Northern Province of Sri Lanka and is known for its agricultural landscape, historical significance, and recovery from the civil war. The district offers a unique blend of culture and natural beauty.",
    overview: {
      title: "Overview",
      content:
        "Kilinochchi is located in the Northern Province of Sri Lanka and is known for its agricultural landscape, historical significance, and recovery from the civil war. The district offers a unique blend of culture and natural beauty.",
    },
    famousPlaces: [
      {
        image: ElephantPass,
        name: "Elephant Pass",
        description:
          "Elephant Pass is a historic landmark and a key entry point to the Jaffna Peninsula. It is known for its significance during the Sri Lankan civil war and offers scenic views of the surrounding wetlands and landscape.",
      },
      {
        image: KilinochchiWarMemorial,
        name: "Kilinochchi War Memorial",
        description:
          "The Kilinochchi War Memorial is dedicated to the soldiers who lost their lives during the civil war. The memorial is a poignant reminder of the region’s history and offers a place for reflection.",
      },
    ],
    activities: [
      "Historical Exploration: Visit the Kilinochchi War Memorial and learn about the district’s historical significance.",
      "Nature Walks: Explore the surrounding natural beauty and wetlands around Elephant Pass.",
    ],
    bestTimeToVisit:
      "January to April: The weather is dry and warm, making it ideal for outdoor exploration and historical tours.",
    travelTips: [
      "Transportation: Kilinochchi can be reached by bus, train, or car from nearby cities. Local tuk-tuks are also available for short trips.",
      "Respect Local Culture: Be mindful of the local customs and historical context, especially when visiting war memorials.",
      "Stay Hydrated: The region can get quite hot, so it’s important to carry water and protect yourself from the sun.",
      "Currency: The Sri Lankan Rupee (LKR) is widely accepted. ATMs are available in Kilinochchi town.",
    ],
    nearbyDayTrips: [
      "Jaffna: A cultural capital of the North, known for its temples and coastal beauty.",
      "Mullaitivu: A coastal town south of Kilinochchi with serene beaches and historical sites.",
    ],
  },
};

export default districtData;
