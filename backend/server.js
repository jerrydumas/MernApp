import express from 'express'
import cors from 'cors'

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
