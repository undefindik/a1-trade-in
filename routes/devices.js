import express from 'express'
const router = express.Router()

import devices from '../data/devices.json' with {type: 'json'}
import findDevice from '../helper/find-device.js'

router.get('/', (req, res) => {
    const { producer, model, configuration } = req.query

    if (producer && model && configuration) {
        const result = findDevice(req, res)
        if (result) res.send(result)
        return
    }
    
    if (devices.length === 0) return res.status(404).json({ message: 'Девайсы не найдены. Повторите попытку ' })
    return res.send(devices)
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const result = devices.find(el => el.id === Number(id))
    if (!result) {
        return res.status(404).json({message: 'Девайс не найден'})
    }
    return res.send(result)
})

export default router