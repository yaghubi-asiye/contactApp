const express = require('express');
const router = express.Router();
const contactRouter = require('./contact');

router.use('/contacts', contactRouter);



module.exports = router;