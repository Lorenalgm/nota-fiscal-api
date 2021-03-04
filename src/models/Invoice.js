const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema(
  {
    ReferenceMonth: Number,
    ReferenceYear: Number,
    Document: { type: String, maxLength: 14 },
    Description: { type: String, maxLength: 256 },
    Amount: Number,
    IsActive: Boolean,
    DeactivatedAt: Date,
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Invoice', InvoiceSchema);
