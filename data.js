const { MongoClient, v1 } = require('mongodb');

const username = encodeURIComponent("User1");
const password = encodeURIComponent("User@#123");
const cluster = "Products";
const authSource = "localhost:27017";
const authMechanism = "AP_SOUTH_1";

let uri =
  `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;

const client = new MongoClient(uri, v1);

async function run() {
  try {
    await client.connect();

    const database = client.db("mongodbVSCodePlaygroundDB");
    const ratings = database.collection("sals");

    const cursor = ratings.find();

    await cursor.forEach(doc => console.dir(doc));
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

console.log("hi");


// const { MongoClient } = require("mongodb");

// const username = encodeURIComponent("<username>");
// const password = encodeURIComponent("<password>");
// const cluster = "<clusterName>";
// const authSource = "<authSource>";
// const authMechanism = "<authMechanism>";

// let uri =
//   `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();

//     const database = client.db("<dbName>");
//     const ratings = database.collection("<collName>");

//     const cursor = ratings.find();

//     await cursor.forEach(doc => console.dir(doc));
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);
