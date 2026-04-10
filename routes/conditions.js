import express from 'express'
const router = express.Router()

import conditions from '../data/conditions.json' with {type: 'json'}
import findCondition from  '../helper/find-condition.js'

router.get('/', (req, res) => {
    if (!conditions || conditions.length === 0) return res.status(404).json({ message: 'Коэффициенты отсутствуют' })
    return res.json(conditions)
})

router.get('/:condition', (req, res) => {
    const condition = findCondition(req, res)
    if (condition) return res.json(condition)
})

export default router