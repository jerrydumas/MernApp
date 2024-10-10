import express from 'express'
import cors from 'cors'
import './dbconnect.js'

const app = express()
const port = process.env.PORT || 4000


app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Sup World')
})
app.get('/animals', async (req,res)=>{
  try {
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
console.log('Found documents =>', findResult);
  } catch (error) {
    console.log(error)
  }
})
app.listen(port, ()=>{
    `App listening on port ${port}`
})
