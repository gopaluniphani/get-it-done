const mongoose = require("mongoose");
const supertest = require("supertest");

const Lawyer = require("../models/Lawyer");
const app = require("../app");
const request = supertest(app);

const lawyer = {
  first_name: "Phani",
  last_name: "Gopaluni",
  phone: 9441582273,
  email: "gopaluniphai@gmail.com",
  expertise: "Corporate Law",
};

describe("lawyer api endpoint test", () => {
  beforeAll(() => {
    mongoose
      .connect("mongodb://lawyers-db:27017/api-test", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("database for lawyer api-test connected..."))
      .catch((err) => console.log(err));
  });

  afterEach(async () => {
    await Lawyer.deleteMany();
  });

  afterAll(async () => {
    await Lawyer.drop();
    mongoose.connection.close();
  });

  it("registers a new lawyer and retrieves his information", async (done) => {
    let response = await request.post("/api/lawyers").send({ lawyer });
    let lawyerReceived = response.body.lawyer;
    expect(lawyerReceived._id).toBeDefined();
    expect(lawyerReceived.first_name).toBe(lawyer.first_name);
    expect(lawyerReceived.last_name).toBe(lawyer.last_name);
    expect(lawyerReceived.email).toBe(lawyer.email);
    expect(lawyerReceived.phone).toBe(lawyer.phone);
    expect(lawyerReceived.expertise).toBe(lawyer.expertise);

    done();
  });

  it("retrieves information of all lawyers", async (done) => {
    await request.post("/api/lawyers").send({ lawyer });
    let response = await request.get("/api/lawyers");
    let lawyers = response.body.lawyers;
    expect(lawyers.length).toBe(1);
    done();
  });
});
