import { Request, Response } from 'express'
import { resTemplate } from '../../helpers/utils'
import TaskService from './Task.services'

class TaskController {
  static async get(req: Request, res: Response) {
    try {
      const tasks = await TaskService.get(req)
      res
        .status(200)
        .json(resTemplate('SUCCESS', 'Tasks fetched successfully!', tasks))
    } catch (e) {
      res.status(500).json(resTemplate('FAILED', 'Task fetching failed', e))
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const task = await TaskService.create(req)

      res
        .status(200)
        .json(resTemplate('SUCCESS', 'Task successfully created!', task))
    } catch (e: any) {
      console.log(e)
      res.status(500).json(resTemplate('FAILED', 'Task creation failed', e))
    }
  }
}

export default TaskController
