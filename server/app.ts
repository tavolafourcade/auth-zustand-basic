import express from 'express'
import authRoutes from './routes/auth.routes'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: ['http://localhost:5174', 'http://127.0.0.1:5174']
}))
app.use(authRoutes)

export default app