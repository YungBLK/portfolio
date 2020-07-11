const express = require('express');
const router = express.Router();
const rendersClass = require('../../model/renders');



 var renderIndexPage = new rendersClass('index');
 router.get('/', (req, res) => {
    renderIndexPage.renderPage(req, res);
 });


 var renderAboutPage = new rendersClass('about');
 router.get('/sobre', (req, res) => {
    renderAboutPage.renderPage(req, res);
 });


 module.exports = router;