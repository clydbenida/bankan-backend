import { Request } from 'express'
import Task from './Task.model'
import { NewTask } from './Task.types'

class TaskService {
  static async create(req: Request) {
    try {
      const newTask = {
        task_name: req.body.task_name,
        assignee_id: req.body.user_id,
      }
      await Task.create({ ...newTask })
    } catch (e: any) {
      throw new Error(e)
    }
  }

  static async get(req: Request) {
    try {
      const tasks = Task.findAll()
      return tasks
    } catch (e: any) {
      throw new Error(e)
    }
  }
}

export default TaskService
