export interface CreateUserParams {
  first_name: string
  last_name: string
  password: string
  username: string
}

export interface CredentialsType { 
  username: string,
  password: string
}

export interface UserType {
  user_id: number
  first_name: string
  last_name: string
  password: string
  username: string
}
