const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.get('/getCredentials', (req, res) => {
    fs.readFile('users.txt', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ statusCode: 500, message: 'File error' });
            return;
        }

        const [username, password] = data.split('=');
        res.send({
            statusCode: 200,
            data: { username, password },
        });
    });
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));