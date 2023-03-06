const express = require('express');

const app = express();

const port = process.env.PORT || 5001;

const mathRouter = require('./routes/math.router.js');

app.use(express.json());

app.use('/math', mathRouter);

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})