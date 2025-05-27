const express = require('express')
const app = express()



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// TEST-camille

const cities = require('./cities/cities.js'); 
const associations = require('./associations/associations.js');
const volunteers = require('./volunteers/volunteers.js');
const wasteTypes = require('./waste/waste.js')

app.use('/cities', cities); 
app.use('/associations', associations);
app.use('/volunteers', volunteers);
app.use('/waste', wasteTypes); 
 
 
const port = process.env.PORT || 3001; 


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})

