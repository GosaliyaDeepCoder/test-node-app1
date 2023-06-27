const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const {isInvalidEmail, isEmptyPayload} = require('./validator')

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)
const dbName = 'company_db'
const collName = 'employees'  

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', async function(req, res) {
   

    //connect to the db
    await client.connect()
    console.log('Connected successfully to server')

    //initiate or get the database or collections
    const db =  client.db(dbName)
    const collection =  db.collection(collName)

    //get data from the database
    const result = await collection.findOne({id: 1})
    console.log(result)
    client.close()
    
    response = {}
    if( result !== null){
        response = {
            name: result.name,
            email: result.email,
            interests: result.interests
        }
    }
    res.send(response)

})

app.post('/update-profile', async function(req, res) {
    const payload = req.body
    console.log(payload)

    if (isEmptyPayload(payload) || isInvalidEmail(payload)) {
        res.status(400).send({error: "Empty payload Couldn't update the user profile data"})
    }
    else{
    
    //updating user profile
    //connect to the db
    await client.connect()
    console.log('Connected successfully to server')

    //initiate or get the database or collections
    const db =  client.db(dbName)
    const collection =  db.collection(collName)

    //save the payload data to the database
    payload['id'] = 1
    const updatedValue = {$set: payload}
    await collection.updateOne({id: 1}, updatedValue, {upsert: true})
    client.close() 
       
    res.status(200).send({info: "User profile data updated succesfully"})
    }
})

const server = app.listen(3001, function() { 
    console.log("APP is runing on port 3001")
})

module.exports = {
    app,
    server
}