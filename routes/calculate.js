import express from 'express'
import findCondition from '../helper/find-condition.js';
import calculatePrice from '../helper/calculate-price.js';
import findDevice from '../helper/find-device.js';

const router = express.Router()

router.get('/', (req, res, next) => {
    const device = findDevice(req, res);
    if (!device) return

    req.params.condition = req.query.condition
    next();
    const condition = findCondition(req, res)

    const result = calculatePrice(device.price, condition.coefficient, device.year);
    return res.send(result)
})

export default router