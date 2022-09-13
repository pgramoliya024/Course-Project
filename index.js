const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const errorController = require('./controllers/error');

const MongoConnect = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes)

app.use(errorController.get404);

MongoConnect(client => {
    console.log(client);
    app.listen(port, () => {
        console.log(` listening to port ${port}`)
    });
})

