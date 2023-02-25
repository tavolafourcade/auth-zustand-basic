import express from 'express'
import { loginHandler } from './controllers/auth.controller'
import router from './routes/auth.routes'
import authRoutes from './routes/auth.routes'

const app = express()

app.use(authRoutes)

router.post('/login', loginHandler)
export default app