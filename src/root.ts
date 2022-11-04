import { Router } from 'express'
import db from '../config/db'

const indexRouter = Router()

indexRouter.get('/', (req, res) => {
  res.json({ message: 'this is the root' })
})

indexRouter.get('/sync', async (req, res) => {
  await db.sync({ force: true, alter: true })
  res.status(201).json({
    message: 'DB Successfully sync',
  })
})

export default indexRouter
