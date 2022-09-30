// return json array of users that can be parsed on the frontend

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.json([
        {
            username: 'Brendan',
            age: 29
        },
        {
            username: 'Kaya',
            age: 29
        }
    ])
});

module.exports = router; //makes this page accessible to rest of application