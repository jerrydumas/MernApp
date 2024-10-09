import { MongoClient } from 'mongodb'

const uri  = process.env.DBCONNECT
const options = {
    useUnifiedTopology:true,
    useNewURLParser:true
}
try {
    let client = new MongoClient(uri,options)
} catch (error) {
    console.log(error)
}
