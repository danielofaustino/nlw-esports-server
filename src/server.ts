import express from 'express'
import {PORT} from './utils/config'
const app = express()


const data = [
  { test: 1 ,teste :2}
]

app.get('/ads', (request, response) => {
  return response.json(data)
})

app.listen(PORT, () => {
  console.log(`Server Running at port: ${PORT} 🚀`)
})