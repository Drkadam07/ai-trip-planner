import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  safetySettings,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, from date 14-10-2024 to date 20-10-2024 with a Cheap Budget, Give me Hotel options list with Hotel name, hotel address, price, hotel image url, geo coordinates, rating, description and suggest itinerary with placename, place details, place image url, geo coordinates, ticket pricing, time t travel each of the location for 3 days with each day plan with best time to visit in, all of your response must be in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "travel_plan": {\n    "destination": "Las Vegas",\n    "dates": {\n      "start_date": "14-10-2024",\n      "end_date": "20-10-2024"\n    },\n    "budget": "cheap",\n    "hotels": [\n      {\n        "name": "The D Las Vegas",\n        "address": "301 Fremont Street, Las Vegas, NV 89101",\n        "price": "$50-$100 per night",\n        "image_url": "https://www.theD.com/media/images/the-d-hotel-las-vegas.jpg",\n        "geo_coordinates": {\n          "latitude": 36.1699,\n          "longitude": -115.1421\n        },\n        "rating": 3.5,\n        "description": "A downtown hotel with a retro vibe, offering affordable rooms, a casino, and a lively atmosphere."\n      },\n      {\n        "name": "Plaza Hotel & Casino",\n        "address": "1 Main Street, Las Vegas, NV 89101",\n        "price": "$60-$120 per night",\n        "image_url": "https://www.plazahotelcasino.com/sites/default/files/styles/hero_image/public/2023-01/Plaza_Hero_Image_Desktop_2.jpg",\n        "geo_coordinates": {\n          "latitude": 36.1698,\n          "longitude": -115.1420\n        },\n        "rating": 4,\n        "description": "A historic downtown hotel with a classic feel, offering rooms, a casino, and a variety of dining options."\n      },\n      {\n        "name": "Golden Nugget Las Vegas",\n        "address": "129 E Fremont Street, Las Vegas, NV 89101",\n        "price": "$70-$150 per night",\n        "image_url": "https://www.goldennugget.com/las-vegas/media/images/GNLV_Hero_10.jpg",\n        "geo_coordinates": {\n          "latitude": 36.1696,\n          "longitude": -115.1417\n        },\n        "rating": 4.5,\n        "description": "A downtown hotel known for its luxurious amenities, including a shark tank and a variety of restaurants and bars."\n      }\n    ],\n    "itinerary": {\n      "day_1": {\n        "plan": [\n          {\n            "time": "10:00 AM",\n            "place": "Fremont Street Experience",\n            "details": "A pedestrian mall with a canopy of lights, street performers, and free concerts.",\n            "image_url": "https://www.vegasexperience.com/sites/default/files/styles/hero_image/public/2023-02/IMG_0255.jpg",\n            "geo_coordinates": {\n              "latitude": 36.1684,\n              "longitude": -115.1414\n            },\n            "ticket_pricing": "Free",\n            "time_to_travel": "2 hours"\n          },\n          {\n            "time": "12:00 PM",\n            "place": "Heart Attack Grill",\n            "details": "A quirky diner known for its over-the-top burgers and its "bypass burger" challenge.",\n            "image_url": "https://www.heartattackgrill.com/images/1182.jpg",\n            "geo_coordinates": {\n              "latitude": 36.1692,\n              "longitude": -115.1429\n            },\n            "ticket_pricing": "Varies",\n            "time_to_travel": "1 hour"\n          },\n          {\n            "time": "2:00 PM",\n            "place": "Neon Museum",\n            "details": "A museum showcasing vintage neon signs from Las Vegas\'s past.",\n            "image_url": "https://www.neonmuseum.org/sites/default/files/styles/hero_large/public/2022-07/Neon_Museum_Hero_Image.jpg",\n            "geo_coordinates": {\n              "latitude": 36.1738,\n              "longitude": -115.1443\n            },\n            "ticket_pricing": "$20-$25",\n            "time_to_travel": "2 hours"\n          }\n        ],\n        "best_time_to_visit": "Morning and afternoon"\n      },\n      "day_2": {\n        "plan": [\n          {\n            "time": "10:00 AM",\n            "place": "Bellagio Conservatory & Botanical Garden",\n            "details": "A stunning display of flowers and plants in a grand greenhouse.",\n            "image_url": "https://www.bellagio.com/content/dam/mgmresorts/bellagio/images/things-to-do/attractions/conservatory-botanical-garden-carousel-hero-image.jpg",\n            "geo_coordinates": {\n              "latitude": 36.1108,\n              "longitude": -115.1734\n            },\n            "ticket_pricing": "Free",\n            "time_to_travel": "1 hour"\n          },\n          {\n            "time": "11:00 AM",\n            "place": "Fountains of Bellagio",\n            "details": "A spectacular water show set to music.",\n            "image_url": "https://www.bellagio.com/content/dam/mgmresorts/bellagio/images/things-to-do/attractions/fountains-of-bellagio-hero-image.jpg",\n            "geo_coordinates": {\n              "latitude": 36.1108,\n              "longitude": -115.1734\n            },\n            "ticket_pricing": "Free",\n            "time_to_travel": "30 minutes"\n          },\n          {\n            "time": "1:00 PM",\n            "place": "The LINQ Promenade",\n            "details": "An outdoor shopping and dining complex with a high roller observation wheel.",\n            "image_url": "https://www.caesars.com/content/dam/caesars/linq/images/the-linq-promenade-hero-image.jpg",\n            "geo_coordinates": {\n              "latitude": 36.1130,\n              "longitude": -115.1737\n            },\n            "ticket_pricing": "Varies",\n            "time_to_travel": "2 hours"\n          }\n        ],\n        "best_time_to_visit": "Afternoon"\n      },\n      "day_3": {\n        "plan": [\n          {\n            "time": "10:00 AM",\n            "place": "Hoover Dam",\n            "details": "A massive dam on the Colorado River, a short drive from Las Vegas.",\n            "image_url": "https://www.nps.gov/hdam/planyourvisit/images/hoover-dam-overview-01.jpg",\n            "geo_coordinates": {\n              "latitude": 36.0040,\n              "longitude": -114.9036\n            },\n            "ticket_pricing": "$30",\n            "time_to_travel": "2 hours (including travel time)"\n          },\n          {\n            "time": "2:00 PM",\n            "place": "Red Rock Canyon National Conservation Area",\n            "details": "A scenic canyon with hiking trails and rock formations.",\n            "image_url": "https://www.nps.gov/redr/planyourvisit/images/red-rock-canyon-national-conservation-area-1.jpg",\n            "geo_coordinates": {\n              "latitude": 36.1463,\n              "longitude": -115.2406\n            },\n            "ticket_pricing": "$15",\n            "time_to_travel": "3 hours (including travel time)"\n          }\n        ],\n        "best_time_to_visit": "Morning and afternoon"\n      }\n    }\n  }\n}\n```',
        },
      ],
    },
  ],
});
