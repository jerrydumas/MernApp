import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'

const app = express()
const port = process.env.PORT || 4000
const uri = process.env.DBCONNECT
let db = "AmazingMernApp"
let collection = "animals"

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Sup World')
})
app.get('/animals', async (req,res)=>{
  try {
    const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);
  } catch (error) {
    console.log(error)
  }
})
app.listen(port, ()=>{
    `App listening on port ${port}`
})
async function start() {
  const client = new MongoClient(uri)
  await client.connect()
  console.log('connected to MongoDB')
  db = client.db()
}
start()