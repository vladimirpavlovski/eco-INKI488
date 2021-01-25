const express = require('express')

const DeponijaCtrl = require('../controllers/movie-ctrl')

const router = express.Router()

router.post('/deponija', DeponiiCtrl.createDeponii)
router.put('/deponija/:id', DeponiiCtrl.updateDeponii)
router.delete('/deponija/:id', DeponiiCtrl.deleteDeponii)
router.get('/deponija/:id', DeponiiCtrl.getDeponiiById)
router.get('/deponija', DeponiiCtrl.getDeponii)

module.exports = router