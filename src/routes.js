const express = require('express');

const routes = express.Router();

app.get('/', (req, res) => {
	res.json({ status: true })
});

module.exports = routes;
