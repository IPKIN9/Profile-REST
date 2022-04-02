const { check } = require('express-validator');

let message = {
    required: "Field cannot be null"
}

exports.requestPost = [
    check('province_name', message.required).not().isEmpty().isLength({min: 2}).withMessage('Name must have more than 2 characters')
  ]