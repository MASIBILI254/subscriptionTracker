import express from 'express'
import {PORT} from './config/env.js'
const app = express()
app.get('/', (req, res) => {
    res.send({body:'Welcome to subscription Tracker..'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

export default app;