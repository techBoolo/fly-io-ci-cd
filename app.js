import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({ message: 'it works' })
})

app.post('/', (req, res) => {
  res.status(201).json({ message: 'post request' })
})

export default app
