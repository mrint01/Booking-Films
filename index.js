require('./db')
const express = require('express');
const film_router = require('./routers/films')
const seance_router = require('./routers/seances')

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json())

app.use('/api/films',film_router);
app.use('/api/seances',seance_router);

app.listen(port,()=> console.log('Server on ',port))