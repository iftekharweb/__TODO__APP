
const dotenv = require('dotenv');
dotenv.config();

const {MongoClient, ServerApiVersion} = require('mongodb');

const uri = process.env.MONGO_URL || "mongodb://localhost:27017/";

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
};

let client;

const connectToMongodb = async () => {
    if(!client) {
        try {
            client = await MongoClient.connect(uri, options);
            console.log('Mongodb is connected!');
        } catch (error) {
            console.log(client); 
        }
    }
    return client;
}

const getConnectedClient = () => client;

module.exports = {connectToMongodb, getConnectedClient};