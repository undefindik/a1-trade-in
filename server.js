import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express()
const PORT = 3000;

import deviceRouter from './routes/devices.js'
import conditionRouter from './routes/conditions.js'
import questionRouter from './routes/questions.js'
import calculateRouter from './routes/calculate.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())


app.use('/api/devices', deviceRouter)
app.use('/api/conditions', conditionRouter)
app.use('/api/questions', questionRouter)
app.use('/api/calculate', calculateRouter)

app.listen(PORT)