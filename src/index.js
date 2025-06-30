import express from 'express'
import { port } from './env.js';

const app = express();



app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('*error', (req, res) => { res.send('Error page') })

app.listen(port, () => {
    console.log(`WEB URL on: http://localhost:${port}`);
  })