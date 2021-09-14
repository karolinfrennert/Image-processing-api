import app from "../index";
import supertest from "supertest";

const request = supertest(app);

describe("Test endpoint response", () => {
  it("gets the APi endpoint", async (done) => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
    done();
  });

  it("gets the Images endpoint", async (done) => {
    const response = await request.get("/api/images");
    expect(response.status).toBe(200);
    done();
  });
});
