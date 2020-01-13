//CRUD

// Mongodb server using node.js


const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser:true,useUnifiedTopology:true }, (error, client) => {
    if(error) {
        console.log('Unable to connect to database!')
    } 

    console.log('Connected Perfectly!')
})

