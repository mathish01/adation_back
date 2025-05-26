const express = require('express')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = 3001

const data = 

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



