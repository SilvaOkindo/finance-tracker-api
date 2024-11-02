import express from 'express'
import { checkAuth, login, registerUser } from '../controllers/auth-controller.js'
import { verifyToken } from '../middleware/auth-middleware.js'

export const authRouter = express.Router()

authRouter.post('/', registerUser)
authRouter.post('/login', login)
authRouter.get('/check-auth', verifyToken, checkAuth)