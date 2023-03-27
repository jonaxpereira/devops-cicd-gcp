const request = require("supertest")
const app = require('./app')

describe("GET /", () => {
    test("should return 200", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });
});