require('dotenv').config();
import express from 'express';
import config from 'config';
import router from './router';
import Logger from '../config/logger';
import morganMiddleware from './middleware/morganMIddleware';


const app = express();
import db from './../config/db';

app.use(express.json());
app.use(morganMiddleware);
app.use("/api/", router)

const port = config.get<number>('port');
app.listen(port, async () => {
    // await  db();
    Logger.info(`Server is running on port ${port}`);
});