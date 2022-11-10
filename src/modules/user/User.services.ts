import { Response } from 'express'
import User from './User.model'
import { CreateUserParams, CredentialsType, UserType } from './User.types'
import { resTemplate } from '../../helpers/utils'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
class UserServices {
  static create = async (res: Response, newUser: CreateUserParams) => {
    try {
      // validate missing fields

      // if successful validation, create user
      bcrypt.genSalt(process.env.SALT_ROUND, function(err: any, salt: any) {
        bcrypt.hash(newUser.password, salt, async function(err: any, hash: any) {
          const user = await User.create({ ...newUser, password: hash })
          return user
        })
      })

    } catch (e: any) {
      throw new Error(`Error creating user: ${e.message}`)
    }
  }

  static login = async (credentials: CredentialsType) => {
    // find user id
    const foundUser = await User.findOne({
      where: {
        username: credentials.username
      }
    }) as unknown as UserType


    if (!foundUser) throw new Error("User not found!")

    if(await bcrypt.compare(credentials.password, foundUser.password)){
      // creating a JWT token
      const token = jwt.sign({
        id: foundUser.user_id, 
        username: foundUser.username, 
        type: 'user'
      }, 
      process.env.JWT_SECRET,
      { expiresIn: '2h' })

      return token
    } else {
      throw new Error("Username or password is incorrect")
    }

    console.log(foundUser)
    // compare password and hash value
  }
}

export default UserServices
