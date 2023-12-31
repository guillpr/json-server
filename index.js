const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')
const fs = require('fs');

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults({noCors:true})


server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
console.log('dans index.js')


const PORT = 8000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
