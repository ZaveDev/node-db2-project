const express = require('express');
const { orWhereNotExists } = require('../data/connection');

const db = require("../data/connection")

const router = express.Router();

router.get("/", (req,res) => {
  db("cars")
    .then(rez => {
      res.status(200).json(rez)
    })
    .catch(err => {  
      res.status(500).json({
        ERRORMESSAGE: "SOMETHING WENT WRRRRRONG",
        err: err
        })
    })
})

router.post("/", (req,res) =>{
  db('cars').insert(req.body)
    .then(rez => {
      res.status(201).json(rez)
    })
    .catch(err => {  
      res.status(500).json({
        ERRORMESSAGE: "SOMETHING WENT WRRRRRONG",
        err: err
        })
    })
})

router.put("/:id", validateId, (req,res) =>{
  db("cars").where({id: req.car.id}).update(req.body)
    .then(rez => {
      res.status(200).json(rez)
    })
    .catch(err => {  
      res.status(500).json({
        ERRORMESSAGE: "SOMETHING WENT WRRRRRONG",
        err: err
        })
    })
  
})

router.delete("/:id", validateId, (req,res) =>{
  db('cars').where({id: req.car.id}).del()
    .then(rez => {
      res.status(200).json(rez)
    })
    .catch(err => {  
      res.status(500).json({
        ERRORMESSAGE: "SOMETHING WENT WRRRRRONG",
        err: err
        })
    })
})

function validateId(req, res, next) {
  const id = Number(req.params.id)
  db("cars").where({id: id})
    .then(rez => {
      req.car = rez[0]
      next()
    })
    .catch(err => {  
      res.status(500).json({
        ERRORMESSAGE: "SOMETHING WENT WRONG WITH MW",
        err: err
      })
    })
}


module.exports = router
