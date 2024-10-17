import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
// import { serve, setup } from './helper/swagger';
import { routes } from './routes';
import swagger from './helper/swagger';
// dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const port: string = process.env.PORT || '9000';
const comp: Number = 9;
const app = express();
app.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(cors());
app.use(compression(comp));
// Specify the port number for the server//
// console.log(config)
// app.get('/', (_req: Request, res: Response) => {
//     // Send a response to the client
//     res.send('Hello, Connect X ,Develop By Rohin');
// });
routes(app);
app.use('/', swagger.serve, swagger.setup)
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});
