import conditions from '../data/conditions.json' with {type: 'json'}

export default function findCondition(req, res) {
    const { condition } = req.params;
    const result = conditions.find(el => el.condition.toLowerCase() === condition.toLowerCase())
    if (!result) return res.status(404).json({ message: `Коэффициент для ${condition} отсутствует` })
    return result
}