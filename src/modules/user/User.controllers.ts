import { NextFunction, Request, Response } from 'express'
import { resTemplate } from '../../helpers/utils'
import UserServices from './User.services'
import { CreateUserParams, CredentialsType } from './User.types'

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

  static login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const credentials = {...req.body} as CredentialsType

      const token = await UserServices.login(credentials)

      res.status(200).json(resTemplate("SUCCESS", "Successfully logged in user", {token}))
    } catch (e: any) {
      console.log('Error logging in user: ', e)
      res.status(500).json({ message: `Error logging in user: ${e.message}` })
    }
  }
}

export default UserController
