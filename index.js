// const express = require('express');
const {MongoClient, v1} = require('mongodb').MongoClient;

const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017';
const dbName = 'data';

app.get('/', async (req, res) => {
    try {
      const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
      const db = client.db(data);
      const collection = db.collection('name');
  
      // Fetch products from the database
      const name = await collection.find({}).toArray();
  
      // Send the response with product information
      res.json(name);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } finally {
      // Close the MongoDB client
      if (client) {
        client.close();
      }
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
