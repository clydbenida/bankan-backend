import { Response } from 'express'
import User from './User.model'
import { CreateUserParams } from './User.types'

class UserServices {
  static create = async (res: Response, newUser: CreateUserParams) => {
    try {
      // validate missing fields

      // if successful validation, create user

      await User.create({ ...newUser })
    } catch (e: any) {
      throw new Error(`Error creating user: ${e.message}`)
    }
  }
}

export default UserServices
