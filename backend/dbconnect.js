import { MongoClient } from 'mongodb'

const uri  = process.env.DBCONNECT
const options = {
    useUnifiedTopology:true,
    useNewURLParser:true
}