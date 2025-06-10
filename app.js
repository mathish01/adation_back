const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



const citiesRoute = require('./cities/cities.js'); 
const associationsRoute = require('./associations/associations.js');
const volunteersRoute = require('./volunteers/volunteers.js');
const wasteTypesRoute = require('./waste/waste.js')
const loginRoute = require('./login/login.js')

app.use('/cities', citiesRoute); 
app.use('/associations', associationsRoute);
app.use('/api/volunteers', volunteersRoute);
app.use('/waste', wasteTypesRoute); 
app.use('/login', loginRoute)


const port = process.env.PORT || 3001; 


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  
})

