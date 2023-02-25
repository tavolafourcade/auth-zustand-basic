import express from 'express'
import router from './routes/auth.routes'
import authRoutes from './routes/auth.routes'

const app = express()

app.use(authRoutes)

export default app