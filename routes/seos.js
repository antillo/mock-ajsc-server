const express = require('express');
const router = express.Router();

const seosController = require('../controllers/seos/instalacion-controllers');

router.post('/api/everis/v1/Instalacion/create',seosController.create);
router.post('/api/everis/v1/Instalacion/Auth',seosController.auth);

module.exports = router;