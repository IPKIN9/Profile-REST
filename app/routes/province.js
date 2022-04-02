const express = require('express');
const router = express.Router();
const provinceController = require('../controller/province');
const proviceValidation = require('../request/province');

router.get('/', provinceController.getAllData);

router.get('/:provinceId', provinceController.getByIdData);

router.post('/', proviceValidation.requestPost, provinceController.createData);

router.patch('/:provinceId', provinceController.updateData);

router.delete('/:provinceId', provinceController.deletingData);

module.exports = router;