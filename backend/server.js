import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// Connection URL
const url = process.env.DBCONNECT;
const client = new MongoClient(url);


// Database Name
const dbName = 'AmazingMernApp';

async function main() {
	
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('animals');
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
app.get('/', (req,res)=>{
    res.send('Sup World')
})
app.get('/animals', await (req,res)=>{
const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);
})
app.listen(port, ()=>{
    `App listening on port ${port}`
})
