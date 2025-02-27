import express from 'express'
import morgan from 'morgan'
import routes from './routes'

const server = express()

server.use(express.json())
server.use(morgan('dev'))

const PORT = 3000

server.use('/', routes)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
