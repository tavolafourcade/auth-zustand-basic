import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'

export const loginHandler = (req: Request, res: Response) => {
  const token = jwt.sign({
    tst: 'test'
  }, 'secret', {
    expiresIn: '100d'
  })

  return res.json({
    token
  })
}