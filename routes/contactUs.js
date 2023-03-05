const express = require('express');

const contactusController = require('../controllers/contactus');

const router = express.Router();


router.get('/', contactusController.getContactUs);

router.post('/success', contactusController.getSuccess);

module.exports = router;