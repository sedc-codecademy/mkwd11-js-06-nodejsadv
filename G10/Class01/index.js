import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost'

const app = express();

app.use(cors());

app.listen(PORT, HOST, (error) => {
    if (error) console.log('Error while starting server:', error)

    console.log(`Server running on http://${HOST}:${PORT}`);
})