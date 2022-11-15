const expressValidator  =  require('express-validator');
const check = expressValidator.check;

module.exports = new class {
    createValidator() {
         return [
            check('name').not().isEmpty().withMessage('name cant be empty'),
            check('phone').not().isEmpty().withMessage('phone cant be empty'),
         ]
    }
    updateValidator() {
        return [
            check('name').not().isEmpty().withMessage('name cant be empty'),
            check('phone').not().isEmpty().withMessage('phone cant be empty'),
         ]
    }
}