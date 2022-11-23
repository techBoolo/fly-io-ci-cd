import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({ message: 'it works' })
})

app.post('/', (req, res) => {
  res.status(201).json({ message: 'post request' })
})

app.put('/', (req, res) => {
  res.status(201).json({ message: 'put request' })
})

app.delete('/', (req, res) => {
  res.status(201).json({ message: 'delete request' })
})

export default app
