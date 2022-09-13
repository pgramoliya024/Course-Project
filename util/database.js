const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const MongoConnect = callback => {
    MongoClient.connect("mongodb+srv://parth:parth@cluster0.itj8ion.mongodb.net/?retryWrites=true&w=majority")
    .then(client => {
        console.log("Connected");
        callback(client);
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = MongoConnect;