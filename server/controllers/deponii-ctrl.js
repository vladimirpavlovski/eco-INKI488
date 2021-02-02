

const Deponii = require('../deponii/diviDeponii')

createDeponii = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Mora da vnesete deponija',
        })
    }

    const deponii = new Deponii(body)

    if (!deponii) {
        return res.status(400).json({ success: false, error: err })
    }

    deponii
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: deponii._id,
                message: 'Deponijata e zacuvana',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Deponijata ne e zacuvana',
            })
        })
}

updateDeponii = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Deponii.findOne({ _id: req.params.id }, (err, deponii) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Deponijata ne e prodanjdena!',
            })
        }
        deponii.grad = body.grad
        deponii.adresa = body.adresa
        
        deponii
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: deponii._id,
                    message: 'Depoinijata e zacuvana',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Deponijata ne e zacuvana',
                })
            })
    })
}

deleteDeponii = async (req, res) => {
    await Deponii.findOneAndDelete({ _id: req.params.id }, (err, deponii) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!deponii) {
            return res
                .status(404)
                .json({ success: false, error: `Deponijata ne e pronajdena` })
        }

        return res.status(200).json({ success: true, data: deponii })
    }).catch(err => console.log(err))
}

getDeponiiById = async (req, res) => {
    await Deponii.findOne({ _id: req.params.id }, (err, deponii) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!deponii) {
            return res
                .status(404)
                .json({ success: false, error: `Deponijata ne e najdena` })
        }
        return res.status(200).json({ success: true, data: deponii })
    }).catch(err => console.log(err))
}

getDeponii = async (req, res) => {
    await Deponii.find({}, (err, deponii) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!deponii.length) {
            return res
                .status(404)
                .json({ success: false, error: `Deponijata ne e najdena` })
        }
        return res.status(200).json({ success: true, data: deponii })
    }).catch(err => console.log(err))
}

module.exports = {
    createDeponii,
    updateDeponii,
    deleteDeponii,
    getDeponii,
    getDeponiiById,
}