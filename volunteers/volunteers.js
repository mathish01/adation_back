const express = require('express');
const app = express();



const database =
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



app.get('/volunteers', (req, res) => {
    res.send(database.volunteers)
})


module.exports = app;