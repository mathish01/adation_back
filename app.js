const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))


// Middleware pour lire les données envoyées par le client : 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// Importation des routes :
const citiesRoute = require('./cities/cities.js'); 
const associationsRoute = require('./associations/associations.js');
const volunteersRoute = require('./volunteers/volunteers.js');
const wasteTypesRoute = require('./waste/waste.js');
const authRoute = require('./authentification/auth.js');

// Puis on les branche dans l'API :
app.use('/api/cities', citiesRoute); 
app.use('/api/associations', associationsRoute);
app.use('/api/volunteers', volunteersRoute);
app.use('/api/api/waste', wasteTypesRoute); 
app.use('/api/auth', authRoute);


const port = process.env.PORT || 3001; 

// ok

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  
})

