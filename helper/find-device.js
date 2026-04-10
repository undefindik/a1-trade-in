import devices from '../data/devices.json' with {type: 'json'}
export default function findDevice(req, res) {
    const { producer, model, configuration } = req.query;

    const result = devices.find(el => {
        return el.producer.toLowerCase() === producer.toLowerCase()
            && el.model.toLowerCase() === model.toLowerCase()
            && el.storage.toLowerCase() === configuration.toLowerCase()
    })

    if (!result) {
        return res.status(404).json({error: 'Девайс не найден'})
    }
    
    return result
}