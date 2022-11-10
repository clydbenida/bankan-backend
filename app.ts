require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import indexRouter from './src/root'
import userRouter from './src/modules/user/User.routes'
import taskRouter from './src/modules/task/Task.routes'
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// ROUTES
app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/task', taskRouter)

app.listen(process.env.PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${process.env.PORT}`)
})
