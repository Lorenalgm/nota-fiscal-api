const Invoice = require('../models/Invoice');

module.exports = {
  async index(request, response) {
    // const { type } = request.query;

    const invoices = await Invoice.find();

    return response.json(invoices);
  },

  async store(request, response) {
    const {
      ReferenceMonth,
      ReferenceYear,
      Document,
      Description,
      Amount
    } = request.body;

    const invoice = await Invoice.create({
        ReferenceMonth,
        ReferenceYear,
        Document,
        Description,
        Amount,
        IsActive: true,
        DeactivatedAt: null
    });

    return response.json(invoice);
  },

  async update(request, response) {
    const {id} = request.params;

    const InvoiceIndex = Invoice.findById(id);

    if(!InvoiceIndex) {
        return response.status(400).json({ error: 'Invoice not found.' });
    }

    const {
        ReferenceMonth,
        ReferenceYear,
        Document,
        Description,
        Amount
    } = request.body;
  
    const invoice = await Invoice.updateOne({ _id: id },{
        ReferenceMonth,
        ReferenceYear,
        Document,
        Description,
        Amount,
        IsActive: true,
        DeactivatedAt: null
    });

    return response.json(invoice);
  },

  async patch(request, response) {
    const {id} = request.params;

    const InvoiceIndex = Invoice.findById(id);

    if(!InvoiceIndex) {
        return response.status(400).json({ error: 'Invoice not found.' });
    }

    const {
        ReferenceMonth,
        ReferenceYear,
        Document,
        Description,
        Amount
    } = request.body;
  
    const invoice = await Invoice.update({
        ReferenceMonth,
        ReferenceYear,
        Document,
        Description,
        Amount,
        IsActive: true,
        DeactivatedAt: null
    });

    return response.json(invoice);
  },

  async delete(request, response) {
    const {id} = request.params;

    const InvoiceIndex = Invoice.findById(id);

    if(!InvoiceIndex) {
        return response.status(400).json({ error: 'Invoice not found.' });
    }

    const invoice = await Invoice.update({
        IsActive: false,
        DeactivatedAt: Date()
    });

    return response.json(invoice);
  }

};
