const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection - using the container name 'civic-db'
const url = 'mongodb://admin:password123@civic-db:27017/civicpulse?authSource=admin';
const client = new MongoClient(url);

// --- NEW GET ROUTE START ---
// This route allows the website to FETCH and display the donations
app.get('/donations', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('civicpulse');
        
        // Fetch all donation records from the collection
        const donations = await db.collection('donations').find({}).toArray();
        
        console.log(`✅ Retrieved ${donations.length} donations`);
        res.status(200).json(donations);
    } catch (error) {
        console.error('❌ DB Read Error:', error);
        res.status(500).send({ error: 'Failed to fetch from database' });
    }
});
// --- NEW GET ROUTE END ---

// This route handles the POST request from Nginx
app.post('/donations', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('civicpulse');

        const donationData = {
            ...req.body,           
            createdAt: new Date()  
        };

        const result = await db.collection('donations').insertOne(donationData);
        
        console.log('✅ Donation recorded:', donationData.name || 'Anonymous');
        res.status(201).send(result);
    } catch (error) {
        console.error('❌ DB Write Error:', error);
        res.status(500).send({ error: 'Failed to save to database' });
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`✅ API running on port ${port}`);
});
