import 'express-async-errors'
import express from 'express'

import responseError from './middleware/response-error'
import * as usersController from './controllers/users.controllers'

const app = express()

app.use(express.json())

app.get('/api/users', usersController.create)

app.use(responseError)

app.listen(3000, () => console.log('🚁🚁🚁🚁🚁'))
