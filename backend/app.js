import path from 'path';
import fs from 'fs';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const DEFAULT_PORT = 8000;

// loading env
const localEnvPath = path.resolve(process.cwd(), '.env.local');
const prodEnvPath = path.resolve(process.cwd(), '.env');

[localEnvPath, prodEnvPath].forEach((envPath) => {
    if(fs.existsSync(envPath)){
        dotenv.config({ path: envPath });
    }
});

// initiate express app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});