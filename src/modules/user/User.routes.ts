import { Router } from 'express'
import UserController from './User.controllers'

const userRouter = Router()

userRouter.post('/create', UserController.create)

export default userRouter
