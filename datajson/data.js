//Data en Json pour associations : 

const associations = [
  {
    "id": 1,
    "name": "Ocean Cleanup",
    "description": "Association dédiée au nettoyage des océans et à la protection de la vie marine.",
    "points": 100,
    "image": ":océan:"
  },
  {
    "id": 2,
    "name": "Forest Guardians",
    "description": "Protection des forêts et reforestation à travers le monde.",
    "points": 150,
    "image": ":feuillu:"
  },
  {
    "id": 3,
    "name": "Wildlife Protectors",
    "description": "Protection des espèces menacées et préservation de leur habitat.",
    "points": 200,
    "image": ":tête_de_lion:"
  },
  {
    "id": 4,
    "name": "Clean Air Initiative",
    "description": "Lutte contre la pollution de l'air et promotion des énergies propres.",
    "points": 120,
    "image": ":souffle_mère_nature:"
  }
];


// Data json pour Cities : 

const cities = 

[
    {
  "cities": [
    {
      "id": 1,
      "name": "Paris",
      "coordinates": {
        "lat": 48.8566,
        "lng": 2.3522
      }
    },
    {
      "id": 2,
      "name": "Marseille",
      "coordinates": {
        "lat": 43.2965,
        "lng": 5.3698
      }
    },
    {
      "id": 3,
      "name": "Lyon",
      "coordinates": {
        "lat": 45.7578,
        "lng": 4.832
      }
    },
    {
      "id": 4,
      "name": "Toulouse",
      "coordinates": {
        "lat": 43.6047,
        "lng": 1.4442
      }
    },
    {
      "id": 5,
      "name": "Nice",
      "coordinates": {
        "lat": 43.7102,
        "lng": 7.262
      }
    },
    {
      "id": 6,
      "name": "Nantes",
      "coordinates": {
        "lat": 47.2184,
        "lng": -1.5536
      }
    },
    {
      "id": 7,
      "name": "Strasbourg",
      "coordinates": {
        "lat": 48.5734,
        "lng": 7.7521
      }
    },
    {
      "id": 8,
      "name": "Montpellier",
      "coordinates": {
        "lat": 43.6108,
        "lng": 3.8767
      }
    },
    {
      "id": 9,
      "name": "Bordeaux",
      "coordinates": {
        "lat": 44.8378,
        "lng": -0.5792
      }
    },
    {
      "id": 10,
      "name": "Lille",
      "coordinates": {
        "lat": 50.6292,
        "lng": 3.0573
      }
    }
  ]
}
]

// Data json pour volunteers : 
const volunteers =
 [
     {
         "id": 1,
         "firstname": "Monica",
         "lastname": "Geller",
         "email": "monica.geller@test.fr",
         "password": "test1234",
         "location": "Paris",
         "created_at": "2025-05-25",
         "updated_at": "2025-05-25"
        },
        {
            "id": 2,
            "firstname": "Rachel",
            "lastname": "Green",
            "email": "rachel.green@test.fr",
            "password": "test1234",
            "location": "Paris",
            "created_at": "2025-05-25",
            "updated_at": "2025-05-25"
        },
        {
            "id": 3,
            "firstname": "Phoebe",
            "lastname": "Buffay",
            "email": "phoebe.buffay@test.fr",
            "password": "test1234",
            "location": "Nantes",
            "created_at": "2025-05-25",
            "updated_at": "2025-05-25"
        },
        {
            "id": 4,
      "firstname": "Joey",
      "lastname": "Tribbiani",
      "email": "joey.tribbiani@test.fr",
      "password": "test1234",
      "location": "Nantes",
      "created_at": "2025-05-25",
      "updated_at": "2025-05-25"
    },
    {
        "id": 5,
        "firstname": "Chandler",
        "lastname": "Bing",
        "email": "chandler.bing@test.fr",
        "password": "test1234",
      "location": "Paris",
      "created_at": "2025-05-25",
      "updated_at": "2025-05-25"
    },
    {
        "id": 6,
        "firstname": "Ross",
        "lastname": "Geller",
        "email": "ross.geller@test.fr",
        "password": "test1234",
        "location": "Lyon",
        "created_at": "2025-05-25",
        "updated_at": "2025-05-25"
    }
]

// Data json pour waste : 

const wasteType =
     [
    {
      "value": "cigarette",
      "label": ":fumeur: Mégots de cigarette",
      "className": "badge-cigarette"
    },
    {
      "value": "plastic",
      "label": ":verre_avec_paille: Plastique",
      "className": "badge-plastic"
    },
    {
      "value": "glass",
      "label": ":saké: Verre",
      "className": "badge-glass"
    },
    {
      "value": "metal",
      "label": ":boîte_de_conserve: Métal",
      "className": "badge-metal"
    },
    {
      "value": "electronic",
      "label": ":iphone: Électronique",
      "className": "badge-electronic"
    },
    {
      "value": "other",
      "label": " Autre",
      "className": "badge-other",
      "quantity": 0
    }
  ]


