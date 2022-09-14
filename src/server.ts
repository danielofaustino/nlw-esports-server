import express from 'express'
import {PORT} from './utils/config'

const app = express()

app.get('/games', (request, response) => {
  return response.json([])
})


app.post('/ads', (request, response) => {
  return response.status(201).json([])
})

app.get('/games/:id/ads', (request, response) => {
  // const gameId = request.params.id;
  return response.json([])
})

app.get('/ads/:id/discord', (request, response) => {
  // const gameId = request.params.id;
  return response.json([])
})

app.listen(PORT, () => {
  console.log(`Server Running at port: ${PORT} 🚀`)
})