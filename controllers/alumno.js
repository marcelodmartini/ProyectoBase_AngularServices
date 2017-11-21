var express = require('express')
, router = express.Router()
, Alumno = require('../models/alumno.js')

router.get('/:id', (req, res) => {
    Alumno.getByLegajo(req.params.id)
    .then( result => { return results; })
    .catch( err => {return err; })
  })

module.exports = router