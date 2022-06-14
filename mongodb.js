const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
      return console.log('Unable to conect to database');  
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Asjad',
    //     age: '40'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to iinsert');
    //     }

    //     console.log(result);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Danyal',
    //         age: '23'
    //     }, {
    //         name: 'Owais',
    //         age: '40'
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to iinsert');
    //     }

    //     console.log(result);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         descripton: 'Dahi le ke ani he',
    //         completed: true
    //     }, {
    //         descripton: 'Makhan bhi kahatam ho gaya he',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert');
    //     }

    //     console.log(result);
    // });

    // Find Query

    // db.collection('users').findOne({ _id: new ObjectID("61a7f88361807e81b4869b57")}, (error, user) => {
    //     if (error) {
    //         return console.log("Unable to get record");
    //     }

    //     console.log(user);
    // });

    // db.collection('users').find({ age: '23'}).toArray((error, users) => {
    //     if (error) {
    //         return console.log("Unable to get record");
    //     }

    //     console.log(users);
    // });

    // db.collection('users').find({ age: '23'}).count((error,count) => {
    //     if (error) {
    //         return console.log("Unable to get record");
    //     }

    //     console.log(count);
    // });

    // db.collection('tasks').findOne({ _id: new ObjectID("61a7fdab275704563f7faf16")}, (error, task) => {
    //     if (error) {
    //         return console.log("Unable to get record");
    //     }

    //     console.log(task);
    // });

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log("Unable to get record");
    //     }

    //     console.log(tasks);
    // });

    // db.collection('users').updateOne({ _id: new ObjectID("61a7f88361807e81b4869b57") }, {
    //     $set: { name: 'Maham' }
    // }).then((result) => {
    //     console.log(result);

    // }).catch((error) => {
    //     console.log(error);
    // });

    // db.collection('users').updateMany({ name: 'Faisal' }, {
    //     $set: { name: 'updatedFaisal' }
    // }).then((result) => {
    //     console.log(result);

    // }).catch((error) => {
    //     console.log(error);
    // });

    db.collection('users').deleteOne({ name: 'updatedFaisal' }).then((result) => {
        console.log(result);

    }).catch((error) => {
        console.log(error, 'Error');
    });

    
});
