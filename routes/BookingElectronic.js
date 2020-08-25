const express = require('express');
const router = express.Router();
const ElectronicBooking = require('../model/BookingElectronic');


router.route('/')
    .get((req, res, next) => {
        ElectronicBooking.find({})
            .then((electronicbookings) => {
                res.json(electronicbookings);
            }).catch(next);
    })
    .post((req, res, next) => {
        ElectronicBooking.create(req.body)
            .then((electronicbookings) => {
                res.json(electronicbookings);
            }).catch(next);
    })
    .delete((req, res, next) => {
        ElectronicBooking.deleteMany({})
            .then((reply) => {
                res.json(reply);
            }).catch(next);
    });

router.route('/:id')
    .get((req, res, next) => {
        ElectronicBooking.findOne({ _id: req.params.id })
            .then((electronicbookings) => {
                res.json(electronicbookings);
            }).catch(next);
    })
    .put((req, res, next) => {
        ElectronicBooking.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            .then((electronicbookings) => {
                res.json(electronicbookings);
            }).catch(next);
    })
    .delete((req, res, next) => {
        ElectronicBooking.findByIdAndDelete(req.params.id)
            .then((electronicbookings) => {
                res.json(electronicbookings);
            }).catch(next);
    });

module.exports = router;