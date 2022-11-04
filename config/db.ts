import { Sequelize } from 'sequelize'

const db = new Sequelize({
  dialect: 'mysql',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
})

export default db
