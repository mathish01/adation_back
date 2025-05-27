const express = require('express')
const app = express()

const port = 3001

const wasteType = 
     [
    {
      "value": "cigarette",
      "label": "🚬 Mégots de cigarette",
      "className": "badge-cigarette"
    },
    {
      "value": "plastic",
      "label": "🥤 Plastique",
      "className": "badge-plastic"
    },
    {
      "value": "glass",
      "label": "🍶 Verre",
      "className": "badge-glass"
    },
    {
      "value": "metal",
      "label": "🥫 Métal",
      "className": "badge-metal"
    },
    {
      "value": "electronic",
      "label": "📱 Électronique",
      "className": "badge-electronic"
    },
    {
      "value": "other",
      "label": " Autre",
      "className": "badge-other",
      "quantity": 0
    }
  ]
app.get('/waste', (req, res) => {
    res.send(wasteType);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

