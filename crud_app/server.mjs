import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './router.mjs';


dotenv.config({ path: 'config.env' });

const app = express();
app.use(express.json());
app.use(morgan('dev'))
app.use(cors())
app.use('/api', router)

const PORT = process.env.PORT || 8080
const DB_URL = process.env.DB_URL

async function startApp() {
    try {
        await mongoose.connect(DB_URL)

        app.listen(PORT, () => {
            console.log('Server running on port ' + PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp();





