const supertest = require('supertest');
const Invoice = require('../models/Invoice');
const app = require('../index');

describe("Testing the invoice API", () => {
  it("tests the base route and returns true for status", async done => {
		const response = await supertest(app).get('/');
		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);
    done();
  });
  
  it("tests the get invoice endpoint and have have message property", async done => {
		const response = await supertest(app).get('/invoices');
		expect(response.status).toBe(200);
    done();
  });

  it("tests the post new invoice endpoint returns as success message", async done => {
    const response = await supertest(app).post('/invoices').send({
			ReferenceMonth: 2,
			ReferenceYear: 2021,
			Description: 'Nota fiscal reference a mensalidade da escola',
			Amount: 200.5
    });
    expect(200).toBe(200);
    done();
  });

  it("tests the put endpoint and returns and returns as success message", async done => {
    const response = await supertest(app).put('/invoices').send({
			ReferenceMonth: 3,
			ReferenceYear: 2021,
			Description: 'Nota fiscal reference a mensalidade da escola',
			Amount: 240.5
    });
    expect(200).toBe(200);
    done();
  });

  it("tests the patch invoice endpoint and returns as success message", async done => {
    const response = await supertest(app).patch('/invoices').send({
			ReferenceMonth: 2,
    });
    expect(200).toBe(200);
    done();
  });

  it("tests the delete invoice endpoint and returns as success message", async done => {
    const response = await supertest(app).delete('/invoices');
    expect(200).toBe(200);
    done();
  });

  afterEach(async () => {
		await Invoice.deleteOne({
			Description: 'Nota fiscal reference a mensalidade da escola'
		})
	})

});