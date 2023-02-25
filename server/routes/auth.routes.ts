import {Router} from 'express'
import { loginHandler, profileHandler } from '../controllers/auth.controller'
import { requireAuth } from '../middlewares/requireAuth'

const router = Router()

router.post('/login', loginHandler)

/*
  El middleware de autenticación se ejecuta antes de la función de controlador
*/
router.get('/profile', requireAuth, profileHandler)

export default router