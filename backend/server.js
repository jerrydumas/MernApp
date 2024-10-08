import express from 'express'
import cors from 'cors'
import clientPromise from './dbconnect.js'


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


export async function main(){
  const client = await clientPromise
  // const isConnected = await client.isConnected()
  const db = client.db('AmazingMernApp')
  const collection = db.collection('animals')
}
main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close())
