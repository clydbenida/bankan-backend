import { Router } from 'express'
import TaskController from './Task.controllers'

const taskRouter = Router()

taskRouter.get('/')
taskRouter.post('/create', TaskController.create)

export default taskRouter
