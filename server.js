require('dotenv').config()

const http = require('http')
const app = require('./src/app')


const httpServer = http.createServer(app)
const server = httpServer.listen(process.env.PORT || 3000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log("Server is running on http://%s:%s", host, port)
})