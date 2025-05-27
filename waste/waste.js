const express = require('express')
const router = express.Router()



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
router.get('/', (req, res) => {
    res.send(wasteType[0]);
});


module.exports = router;




