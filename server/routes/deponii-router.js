const express = require('express')

const DeponijaCtrl = require('../controllers/deponii-ctrl')

const router = express.Router()

router.post('/deponija', DeponijaCtrl.createDeponii)
router.put('/deponija/:id', DeponijaCtrl.updateDeponii)
router.delete('/deponija/:id', DeponijaCtrl.deleteDeponii)
router.get('/deponija/:id', DeponijaCtrl.getDeponiiById)
router.get('/deponija', DeponijaCtrl.getDeponii)

module.exports = router