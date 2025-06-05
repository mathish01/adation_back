const express = require('express')
const router = express.Router()
const pool = require('../database');  

// GET
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM waste');
        res.json(result.rows); 
    } catch (err) {
        res.status(500).json({ erreur: err.message});
    } 
}); 

// / PATCH 
router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const { quantity } = req.body;

  try {
    // Vérifie qu’une nouvelle quantité est bien fournie
    if (quantity === undefined) {
      return res.status(400).json({ error: 'La quantité est requise.' });
    }

    // Requête SQL : mise à jour de la quantité
    const result = await pool.query(
      'UPDATE waste SET quantity = $1 WHERE id = $2 RETURNING *',
      [quantity, id]
    );

    // Si aucun déchet n’a été mis à jour, l'id est sûrement invalide
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Déchet non trouvé.' });
    }

    // Réponse OK avec le déchet mis à jour
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});







module.exports = router;




