const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validator = require('./validator');

router.get(
    '/', 
    controller.getAll
);

router.post(
    '/', 
    validator.createValidator(),
    controller.validate,
    controller.create
);
router.put(
    '/:id', 
    validator.updateValidator(),
    controller.validate,
    controller.update
);






module.exports = router;