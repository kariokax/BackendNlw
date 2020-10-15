import express from 'express';

import './database/conection';

const app = express();

app.use(express.json);

app.listen(3333);