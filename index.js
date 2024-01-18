const { MongoClient } = ("mongodb");

const username = encodeURIComponent("simplestitchwear");
const password = encodeURIComponent("Himani@#123");
const cluster = "sign-up.kammi.mongodb.net";
const authSource = "atlasAdmin";
const authMechanism = "SCRAM-SHA-256";

let uri =
  `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = await client.db("sample_mflix");
    const ratings = database.collection("movies");

    const cursor = ratings.find();

    await cursor.toArray(doc => console.dir(doc));
    console.log(database);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
