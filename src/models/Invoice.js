const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema(
  {
    ReferenceMonth: Number,
    ReferenceYear: Number,
    Document: String,
    Description: String,
    Amount: Number,
    IsActive: Boolean,
    DeactivatedAt: Date,
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Invoice', InvoiceSchema);
