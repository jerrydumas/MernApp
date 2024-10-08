import { MongoClient } from 'mongodb'

const uri  = process.env.DBCONNECT
const options = {
    useUnifiedTopology:true,
    useNewURLParser:true
}
let client
let clientPromise

if(!process.env.DBCONNECT){
    throw new ERROR('Please add your DBCONNECT Stringto .env local')
}
if(process.env.DBCONNECT == 'development'){
    if(!global._MongoClientPromise){
        client = new MongoClient(uri,options)
        global._MongoClientPromise = client.connect()
    }else{
        client= new MongoClient(uri,options)
        clientPromise = new client.connect()
    }
}
export default clientPromise