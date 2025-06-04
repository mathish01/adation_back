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

 



module.exports = router;