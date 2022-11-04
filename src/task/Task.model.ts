import { DataTypes } from 'sequelize'
import db from '../../config/db'
import User from '../user/User.model'

const Task = db.define('Task', {
  task_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  task_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  assignee_id: {
    type: DataTypes.INTEGER,
  },
})

User.hasMany(Task, {
  sourceKey: 'user_id',
  foreignKey: 'assignee_id',
})

export default Task
