const express = require('express');
const app = express();


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
        // Route qui renvoie les associations
        app.get('/associations', (req, res) => {
            res.json({associations});
        });
        app.get('/associations/:id', (req, res) => {
          const id = parseInt(req.params.id); // Récupération de l'id dans l'url
          // Chercher l'association par ID
          const associationId = associations.find(assoc => assoc.id === id);
          if (!associationId) {
            return res.status(404).json({message: "Association non trouvée"});
          }
          // Retourner l'association trouvée
          res.json(associationId);
        });
        

module.exports = app;




