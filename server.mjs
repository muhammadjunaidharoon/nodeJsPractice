import express from 'express'

const app = express()
const port = 3000

app.get('/home', (req, res) => {
  res.send('I am at Home page!')
})

app.get('/profile', (req, res) => {
  res.send('I am profile Page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})