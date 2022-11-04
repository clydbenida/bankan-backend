import { NextFunction, Request, Response } from 'express'
import UserServices from './User.services'
import { CreateUserParams } from './User.types'

class UserController {
  static create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newUser = {
        ...req.body,
      } as CreateUserParams

      await UserServices.create(res, newUser)

      res.status(200).json({ message: 'Successfully created user!' })
    } catch (e: any) {
      console.log('Error creating user: ', e)
      res.status(500).json({ message: `Error creating user: ${e.message}` })
    }
  }
}

export default UserController
