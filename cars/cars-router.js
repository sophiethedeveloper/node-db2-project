const express = require('express')
const db = require('../data/connection')

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    db('cars').where({ id }).first()
    .then(car => {
        res.status(200).json(car)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})

router.post('/', (req, res) => {
    const carData = req.body
    db('cars').insert(carData)
    .then(ids => {
        db('cars').where({id: ids[0]})
        .then(newCar => {
            res.status(201).json(newCar)
        });
    })
    .catch(error => {
        res.status(500).json({message: error.message})
    })
})

module.exports = router;