const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/Course-Project', { useNewUrlParser: true })
    .then(() => {
        console.log('mongoDB Connect');
    })
    .catch(err => {
        console.log(err);
    })

