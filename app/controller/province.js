const db = require('../config/connection');
const query = require('../models/province');
const { validationResult } = require('express-validator');

exports.getAllData = (req, res, next) => {
    db.query(query.getAll, (err, result) => {
        if (err) {
            return next(err)
        }
        if (result.rows == 0) {
            res.status(404).json({message: "Table is empity"})
        } res.send(result.rows);
    })
}

exports.getByIdData = (req, res, next) => {
    db.query(query.getById, [req.params.provinceId], (err, result) => {
    if (err) {
      return next(err)
    }
    if (result.rows == 0) {
        res.status(404).json({message: "Data not found"})
    } res.send(result.rows[0])
  })
}

exports.createData =  (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body);

    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    } else {
        db.query(query.post, [req.body.province_name], (err, result) => {
            if (err) {
                return next(err)
            }
            res.status(200).json({
                message: "Data success to crated"
            });
        })
    }
}

exports.updateData = (req, res, next) => {
    let id = req.params.provinceId;
    db.query(query.update, [req.body.province_name, id], (err, result) => {
        if (err) {
            return next(err)
        }
        if (result.rows == 0) {
            res.status(404).json({message: "Data not found"})
        } res.status(200).json({
            message: "Data success to crated"
        });
    });
}

exports.deletingData = (req, res, next) => {
    let id = req.params.provinceId;
    db.query(query.delete, [id], (err, result) => {
        if (err) {
            return next(err)
        }
        if (result.rows == 0) {
            res.status(404).json({message: "Data not found"})
        } res.status(200).json({
            message: "Deleted"
        });
    });
}