import express from 'express'

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Sup World')
})

app.listen(port, ()=>{
    `App listening on port ${port}`
})