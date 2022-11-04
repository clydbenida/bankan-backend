import { Sequelize } from 'sequelize'

const db = new Sequelize({
  dialect: 'mysql',
  username: 'root',
  password: '@nglakibr0',
  database: 'bankan_db_local',
})

export default db
