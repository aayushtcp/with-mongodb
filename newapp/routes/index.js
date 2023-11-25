var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const { MongoClient } = require('mongodb');

// Connection URI (Uniform Resource Identifier)
const uri = 'mongodb://localhost:27017/your_database_name';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');

  // Perform database operations here

  // Close the connection when done
  // client.close();
});
module.exports = router;