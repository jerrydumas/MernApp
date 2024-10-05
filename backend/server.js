import express from 'express'

const app = express()
const port = process.env.PORT || 5000
app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(5000, ()=>{
    `App listening on port ${port}`
})