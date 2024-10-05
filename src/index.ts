import express, { Request, Response } from 'express';
import { nanit } from './api';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import { routes } from './routes';
dotenv.config();
console.log(process.env.Name)
const port: Number = 8080;
const comp: Number = 9;
const app = express();
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(compression(comp));

// Specify the port number for the server

app.get('/', (_req: Request, res: Response) => {
    // Send a response to the client
    res.send('Hello, Connect X');
});
app.use('api/v0', routes)
routes
// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});
