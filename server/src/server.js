import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is running'});

})

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});