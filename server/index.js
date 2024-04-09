import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServer = createServer()

const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
})

const rooms = {}

const PORT = process.env.PORT || 3000
httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}.`));