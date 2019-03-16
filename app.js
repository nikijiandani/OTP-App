const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('This is an OTP-App!'));

//SERVING THE PUBLIC DIRECTORY
app.use(express.static(__dirname + "/public"));

app.listen(port, () => console.log(`OTP app listening on port ${port}!`));