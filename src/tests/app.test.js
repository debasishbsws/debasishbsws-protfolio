const supertest = require("supertest");
const expect = require("chai").expect;
const app = require("../index.js");


describe("GET /", () => {
    it("should return 200 OK", async() => {
        const res = await supertest(app).get("/");
        expect (res.status).to.equal(200);
    }
    );
});