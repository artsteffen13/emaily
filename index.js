const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello')
});

const PORT = process.env.port;
app.listen(PORT || 5000);