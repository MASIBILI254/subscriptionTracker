import express from 'express'
import {PORT} from './config/env.js'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
const app = express()
app.use('/users', userRouter)
app.use('/auth', authRouter)
app.use('/subscriptions', subscriptionRouter)
app.get('/', (req, res) => {
    res.send({body:'Welcome to subscription Tracker..'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

export default app;