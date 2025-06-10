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

// POST collecte
router.post('/collecte', async (req, res) => {
  const { volunteer_id, city_id, date, collecte } = req.body;

  if (!volunteer_id || !city_id || !date || !Array.isArray(collecte) || collecte.length === 0) {
    return res.status(400).json({ error: 'Champs requis manquants ou invalides' });
  }

  try {
    // On va insérer chaque type de déchet avec sa quantité
    // en liant avec volunteer_id, city_id, date
    // Ici, on fait plusieurs insertions dans ta table 'collection' (ou collections)

    // Exemple avec une transaction pour assurer la cohérence
    await pool.query('BEGIN');

    const insertPromises = collecte.map(({ waste_type, quantity }) => {
      return pool.query(
        `INSERT INTO collection (volunteer_id, waste_type, city_id, created_at, quantity)
         VALUES ($1, $2, $3, $4, $5)`,
        [volunteer_id, waste_type, city_id, date, quantity]
      );
    });

    await Promise.all(insertPromises);

    await pool.query('COMMIT');

    res.status(201).json({ message: 'Collecte enregistrée avec succès' });

  } catch (error) {
    await pool.query('CANCEL');
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur lors de l\'enregistrement' });
  }
});

// // / PATCH 
// router.patch('/:id', async (req, res) => {
//   const id = req.params.id;
//   const { quantity } = req.body;

//   try {
//     // Vérifie qu’une nouvelle quantité est bien fournie
//     if (quantity === undefined) {
//       return res.status(400).json({ error: 'La quantité est requise.' });
//     }

//     // Requête SQL : mise à jour de la quantité
//     const result = await pool.query(
//       'UPDATE waste SET quantity = $1 WHERE id = $2 RETURNING *',
//       [quantity, id]
//     );

//     // Si aucun déchet n’a été mis à jour, l'id est sûrement invalide
//     if (result.rows.length === 0) {
//       return res.status(404).json({ error: 'Déchet non trouvé.' });
//     }

//     // Réponse OK avec le déchet mis à jour
//     res.json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });







module.exports = router;




