const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = path.dirname(process.mainModule.filename);


router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
})

router.post('/success', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'successForm.html'));
})

module.exports = router;