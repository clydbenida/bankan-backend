const bcrypt = require('bcrypt')

export function generatePasswordToHash (plain_password: string) {
  bcrypt.genSalt(process.env.SALT_ROUND)
}