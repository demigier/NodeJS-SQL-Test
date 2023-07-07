import express from 'express';
import routes from './src/routes/tarjeta.js';
import env from './src/config.js';

const app = express();

app.use(express.json());

app.use('/', routes);

const listener = app.listen(env.port, () =>{
    console.log('Listening on port ' + listener.address().port);
});