const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('This is an OTP-App!'));

app.listen(port, () => console.log(`OTP app listening on port ${port}!`));