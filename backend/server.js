import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'

const URI = process.env.DBCONNECT
const client = new MongoClient(URI);
try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("AmazingMernApp").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}



const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Sup World')
})
app.get('/animals', async (req,res)=>{
const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);  

})
app.listen(port, ()=>{
    `App listening on port ${port}`
})

