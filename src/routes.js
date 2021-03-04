const express = require('express');
const InvoiceController = require('./controllers/InvoiceController');

const routes = express.Router();

app.get('/', (req, res) => {
	res.json({ status: true })
});

routes.get('/invoices', InvoiceController);
routes.post('/invoices', InvoiceController);
routes.put('/invoices', InvoiceController);
routes.patch('/invoices', InvoiceController);
routes.delete('/invoices', InvoiceController);

module.exports = routes;
