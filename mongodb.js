//CRUD

// Mongodb server using node.js


const mongodb = require('mongodb') //npm library
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const dataBaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser:true, useUnifiedTopology:true }, (error, client) => {
    if(error) {
      return  console.log('Unable to connect to database!')
    } 

    const db = client.db(dataBaseName)

    db.collection('users').insertOne({
        name : 'Anubhav',
        age : 21
    },(error,result) => {
        if(error) {
            return console.log('Unable to insert user')
        }

        console.log(result.ops)
    })
})

