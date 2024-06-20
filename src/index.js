import app from './app.js'
import './database.js'

const PORT = process.env.PORT || 3000
console.log('Server liten on port', PORT)


 app.listen(PORT)


