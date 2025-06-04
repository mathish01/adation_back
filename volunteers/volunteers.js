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
        const city_id = req.body.city_id;
        const waste_type = req.body.waste_type; 

        const result = await pool.query(
            'INSERT INTO volunteers (firstname, lastname, mail, password, location, city_id, waste_type) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING*', 
            [firstname, lastname, mail, password, location, city_id, waste_type]
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





module.exports = router;