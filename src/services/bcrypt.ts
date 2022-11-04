const bcrypt = require('bcrypt')

export async function generatePasswordToHash (plain_password: string) {
  return bcrypt.genSalt(process.env.SALT_ROUND, function(err: any, salt: any) {
    bcrypt.hash(plain_password, salt, function(err: any, hash: any) {
      return hash
    })
  })
}