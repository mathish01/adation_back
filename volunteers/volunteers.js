const express = require('express');
const router = express.Router()



router.get('/', async (req, res) => {
    await req.body.query('SELECT * FROM volunteers')
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).json({ erreur: err.message}));
}); 




module.exports = router;