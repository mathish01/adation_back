const express = require('express')
const app = express()



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = process.env.PORT || 3001; 


const cities = require('./Cities/cities.js'); 
const associations = require('./Assiociations/associations.js');
const volunteers = require('./Volunteers/volunteers.js');
const wasteTypes = require('./Waste_types/waste.js')

app.use('/Cities', cities); 
app.use('/Associations', associations);
app.use('/Volunteers', volunteers);
app.use('/Waste_types', wasteTypes); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

}); 

