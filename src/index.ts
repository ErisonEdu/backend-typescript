import express from 'express';

import {helloWorld} from './routes'

const app = express();

app.get('/', helloWorld);
console.log('backend conectado!');
app.listen(3333);


