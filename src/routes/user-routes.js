import express from 'express'
import { getAllUsers } from '../controllers/user-controller.js'

export const userRouter = express.Router()

userRouter.get('/', getAllUsers)