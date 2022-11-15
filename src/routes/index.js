const express = require('express');
const router = express.Router();
const contactRouter = require('./contact');

router.use('/contacts', contactRouter);



module.exports = router;
// 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
// sudo git push https://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@github.com/yaghubi-asiye/contactApp.git

