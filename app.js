const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');

const routerController = require('./src/controller/routes/indexRouterController')

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs')


app.use(express.json());
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', routerController);

// Start server listening on env port or 3000
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>{

    const host = server.address().address;
    const { port } = server.address();

    console.log('Portfolio listening on https://%s:%s', host, port);

});