const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'


const getConnection =
    mongoClient.connect(url, (err, client) => {
        let abc = 'xyz';
        if (err) {
            console.log(`Error  ${err}`);
            return false;
        }
        console.log(`Success  ${JSON.stringify(client.s)}`);
        client.close();
    })


module.exports = {
    getConnection
}

