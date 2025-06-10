const express = require('express');
const router = express.Router();
const pool = require('../database');

// Exemple d'utilisation
router.post('/login', async (req, res) => {
    console.log('BODY REÇU :', req.body)
    const {email, password} = req.body;

     if (!email || !password) {
    return res.status(400).json({ message: 'Email et mot de passe requis' });
  }

    try {
        const result = await pool.query(
            'SELECT * FROM volunteers WHERE mail = $1 AND password = $2',
            [email, password]
        );

        if((await result).rows.length > 0) {
            res.status(200).json({message: 'Connexion réussie', volunteers: result.rows[0]});
        } else {
            res.status(401).json({message: 'Identifiants incorrects'});
        }
    } catch (error) {
        res.status(500).json({erreur: error.message});
    }
});

module.exports = router;