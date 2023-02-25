import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

// Esta función se ejecutará primero para validar el /profile
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {

  // Bearer token
  const authHeader = req.headers.authorization

  if (!authHeader) return res.status(401).json({
    message: 'Unauthorized'
  })

  const token = authHeader.split(' ')[1]

  if (!token) return res.status(401).json({
    message: 'Unauthorized'
  })

  // Verificar el token
  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.status(403).json({
      message: 'Unauthorized'
    })

    // Si el token es válido, se ejecuta el siguiente middleware
    req.user = user
    next()
  })
  next()
}