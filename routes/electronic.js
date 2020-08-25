const express = require('express');
const router = express.Router();
const Electronicbooking = require('../model/BookingElectronic');


router.route('/')
    .get((req, res, next) => {
        Electronicbooking.find({})
            .then((Electronicbookings) => {
                res.json(Electronicbookings);
            }).catch(next);
    })
    .post((req, res, next) => {
        Electronicbooking.create(req.body)
            .then((Electronicbookings) => {
                res.json(Electronicbookings);
            }).catch(next);
    })
    .delete((req, res, next) => {
        Electronicbooking.deleteMany({})
            .then((reply) => {
                res.json(reply);
            }).catch(next);
    });

router.route('/:id')
    .get((req, res, next) => {
        Electronicbooking.findOne({ _id: req.params.id })
            .then((Electronicbookings) => {
                res.json(Electronicbookings);
            }).catch(next);
    })
    .put((req, res, next) => {
        Electronicbooking.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            .then((Electronicbookings) => {
                res.json(Electronicbookings);
            }).catch(next);
    })
    .delete((req, res, next) => {
        Electronicbooking.findByIdAndDelete(req.params.id)
            .then((Electronicbookings) => {
                res.json(Electronicbookings);
            }).catch(next);
    });

module.exports = router;