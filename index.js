const express = require('express');
const app = express();
const router = require('./src/routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', router);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));