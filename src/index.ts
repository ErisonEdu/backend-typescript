import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message : 'Hello World'})
})
console.log('backend conectado!');
app.listen(3333);


