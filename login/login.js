

const express = require('express');
const router = express.Router();
const pool = require('../database');

//console.log('coucouuuuu', firstname)
router.post('/', async (req, res) => {
        
        // const {firstname, password} = req.body;
        try {
            const firstname = req.body.firstname
            const password = req.body.password
            
            
            const result = await pool.query('SELECT firstname, password FROM volunteers WHERE firstname = $1 AND password = $2',
                [firstname, password] );
                
                console.log(req.body);
                res.json("résultat",req.body);
            } catch (err){
                res.status(500).json({erreur: err.message});
            }
         
        
    } 
);
// const prenom =document.getElementById("prenom");
        // const mdp = document.getElementById("mdp");       
        // const div = document.getElementById("form");

        // const message = document.createElement("p");
        // div.appendChild(message);

       // console.log(result.rows)


module.exports = router;