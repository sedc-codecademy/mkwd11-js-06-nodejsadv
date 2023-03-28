import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './db/mongo-connection.js';
import router from './router.const.js';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost'

const app = express();

app.use(cors());

app.use('/api', router)

app.listen(PORT, HOST, async (error) => {
    if (error) console.log('Error while starting server:', error)

    await connectToDatabase()

    console.log(`Server running on http://${HOST}:${PORT}`);
})