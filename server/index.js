const express = require('express');
const app = express(); // create express application

const users = require('./routes/users'); // register global middleware variable

app.use('./api/users', users); // returns the users response object when url is accessed

//route
app.get('/api', (req, res) => {
    res.send('hi from express api');
})


app.listen(3001, console.log('listening on port 3001'));