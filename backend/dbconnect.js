import { MongoClient } from "mongodb"

const uri = process.env.DBCONNECT
let db = "AmazingMernApp"
let collection = "animals"

async function main() {
    const client = new MongoClient(uri)
    await client.connect()
    console.log('Connected to MongoDB')
    db.client.db
}