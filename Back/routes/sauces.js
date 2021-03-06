const express = require('express');
const router = express.Router();
const sauceCtrl = require('../controllers/sauces')
const auth = require('../middleware/auth'); // J'importe le middleware auth
const multer = require('../middleware/multer-config'); // J'importe le middleware multer

//Renvoie un tableau de toutes les sauces de la base de données.
router.get('/', auth, sauceCtrl.getAllSauces);

//Renvoie la sauce avec l’_id fourni
router.get('/:id', auth, sauceCtrl.getOneSauce);

// Capture et enregistre l'image, analyse la sauce transformée en chaîne de caractères et l'enregistre 
// dans la base de données en définissant correctement son imageUrl
router.post('/', auth, multer, sauceCtrl.createSauce);

// Met à jour la sauce avec l'_id fourni. Si une image est téléchargée, elle est capturée
// et l’imageUrl de la sauce est mise à jour.
router.put('/:id', auth, multer, sauceCtrl.modifySauce);

// Supprime la sauce avec l'_id fourni
router.delete('/:id', auth, sauceCtrl.deleteSauce);

// Création du statut like pour la sauce avec l'_id fourni
router.post('/:id/like', auth, sauceCtrl.likeSauce);

// Pour pouvoir exporter le router
module.exports = router;