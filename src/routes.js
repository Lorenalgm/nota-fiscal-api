const { Router } = require('express');
const InvoiceController = require('./controllers/InvoiceController');
const routes = Router();

routes.get('/', (req, res) => {
	res.json({ status: true })
});

routes.get('/invoices', InvoiceController.index);
routes.post('/invoices', InvoiceController.store);
routes.put('/invoices/:id', InvoiceController.update);
routes.patch('/invoices/:id', InvoiceController.patch);
routes.delete('/invoices/:id', InvoiceController.delete);

module.exports = routes;
