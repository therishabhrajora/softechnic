
const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbnm = 'rishabh';
const collectionNm = "user"
const client = new mongoclient(url);

async function dbConnection() {
    let result = await client.connect();
    let db = result.db(dbnm);
    return db.collection(collectionNm);
//     let response = await collection.find({}).toArray();
//     console.log(response);

}

module.exports=dbConnection;