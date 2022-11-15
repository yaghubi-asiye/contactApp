const autoBind = require('auto-bind');
const {validationResult} = require('express-validator')

module.exports = class {
    constructor() {
        autoBind(this);
    }

    validationBody(req, res) {
        const result = validationResult(req);
        if(!result.isEmpty()) {
            const errors = result.array();
            const message = [];
            errors.forEach(err => message.push(err.msg));
            res.status(400).json({
                data : message,
                message: "validation error",
            });
            return false;
        }
        return true;
    }

    validate(req, res, next) {
        if(!this.validationBody(req, res)) {
            return;
        }
        next();
    }

   
}