import { MongoClient } from "mongodb";
import { config } from 'dotenv'

config()

const uri = process.env.MONGO_URI

const client = new MongoClient(uri)

async function connect() {
    client.connect().then(() => console.log("database connected")).catch(err => console.error("error: ", err))
}

function collection(collectionName) {
    return client.db("bankCrud").collection(collectionName)
}

export default {
    connect,
    collection
}