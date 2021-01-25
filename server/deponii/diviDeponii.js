const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Deponii = new Schema(
    {
        grad: { type: String, required: true },
        adresa: { type: String, required: true },
        
    },
   
)

module.exports = mongoose.model('deponii', Deponii)