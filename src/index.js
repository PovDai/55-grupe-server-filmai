import express from 'express'

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('*error', (req, res) => { res.send('Error page') })

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
  })