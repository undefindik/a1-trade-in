import express from 'express'
const router = express.Router()

import questions from '../data/questions.json' with {type: 'json'}

router.get('/', (req, res) => {
    if (!questions || questions.length === 0) return res.status(404).json({ message: 'Вопросы не найдены' })
    return res.json(questions)
})

router.get('/:title', (req, res) => {
    const { title } = req.params
    if (!questions || questions.length === 0) return res.status(404).json({ message: 'Вопросы не найдены' })
    const result = questions.find(el => el.title.toLowerCase() === title.toLowerCase())
    if (!result) return res.status(404).json({ message: 'Вопросы не найдены' })
    return res.json(result)
})


export default router