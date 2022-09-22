import express from 'express';
import {router} from './routes';

const PORT = 8000;
const app = express();

app.use(router);

export const connectServer = () => {
    try{
        app.listen(PORT, ()=> console.log(`Running server at http://localhost:${PORT}/`));
    }catch (e) {
        throw e;
    }
}