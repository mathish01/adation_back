const express = require('express');
const router = express.Router(); 
const pool = require('../database');   

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM volunteers');
        res.json(result.rows); 
    } catch (err) {
        res.status(500).json({ erreur: err.message});
    } 
}); 



router.post('/', async (req, res) => {
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname; 
        const mail = req.body.mail; 
        const password = req.body.password; 
        const location = req.body.location;
        // const city_id = req.body.city_id;
        // const waste_type = req.body.waste_type; 

        const result = await pool.query(
            'INSERT INTO volunteers (firstname, lastname, mail, password, location) VALUES ($1, $2, $3, $4, $5) RETURNING*', 
            [firstname, lastname, mail, password, location]
        ); 

        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({erreur: err.message});
    }
}); 
 


router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const result = await pool.query(
            'DELETE FROM volunteers WHERE id = $1 RETURNING *',
            [id]
        );

        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({erreur: err.message});
    }
}); 



router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id; 
        
        const {
            firstname,
            lastname,
            mail,
            password,
            location,
        } = req.body; 

        const result = await pool.query(
            `UPDATE volunteers
             SET firstname = $1, lastname = $2, mail = $3, password = $4, location = $5,
             WHERE id = $6
             RETURNING *`,
             [firstname, lastname, mail, password, location, id]
        ); 

        if(result.rows.length === 0) {
            return res.status(404).json({erreur: 'Bénévole non trouvé'});
        } 

        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ erreur: err.message});
    }
}); 



router.get('/search', async (req, res) => {
    try {
        const { query } = req.query;

        const result = await pool.query(
            `SELECT * FROM volunteers 
             WHERE firstname ILIKE $1
             OR lastname ILIKE $1
             OR mail ILIKE $1`,
             [`%${query}%`]  // % = wildcard e, SQL est utilisé avec ILKIE pour matcher n'importe quelle suite de caractères. 
        );
        
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ erreur: err.message}); 
    }
}); 

// http://localhost:3001/api/volunteers/search?query=Geller 
module.exports = router;