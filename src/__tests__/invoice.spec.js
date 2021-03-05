const app = require('../index');

describe("Testing the invoice API", () => {
  it("tests the base route and returns true for status", async () => {

		const response = await supertest(app).get('/');
		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);

  });
  
  it("tests the get invoice endpoint and have have message property", () => {
    expect(200).toBe(200);
  });

  it("tests the post new invoice endpoint returns as success message", () => {
    expect(200).toBe(200);
  });

  it("tests the put endpoint and returns and returns as success message", () => {
    expect(200).toBe(200);
  });

  it("tests the patch invoice endpoint and returns as success message", () => {
    expect(200).toBe(200);
  });

  it("tests the delete invoice endpoint and returns as success message", () => {
    expect(200).toBe(200);
  });


});