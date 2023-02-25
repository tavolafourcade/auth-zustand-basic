import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'

export const loginHandler = (req: Request, res: Response) => {
  const token = jwt.sign({
    test: 'test'
  }, 'secret', {
    expiresIn: '100d'
  })

  return res.json({
    token
  })
}

// Solo llegaría a esta ruta si está protegida por el middleware de autenticación
export const profileHandler = (req: Request, res: Response) => {
  return res.json({
    message: 'Profile data'
  })
}