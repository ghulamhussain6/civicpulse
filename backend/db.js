const { MongoClient } = require('mongodb');

// The URL uses the service name 'civic-db' from your docker-compose
const url = process.env.MONGO_URL || "mongodb://admin:password123@civic-db:27017/civicpulse?authSource=admin";
const client = new MongoClient(url);

const dbName = 'civicpulse';
let db;

async function connectToDatabase() {
  if (db) return db;

  try {
    await client.connect();
    console.log('✅ Connected successfully to MongoDB');
    db = client.db(dbName);
    return db;
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err);
    throw err;
  }
}

module.exports = { connectToDatabase };
