const mongoose = require("mongoose");
const supertest = require("supertest");

const Doctor = require("../models/Doctor");
const app = require("../app");
const request = supertest(app);

const doctor = {
  first_name: "Phani",
  last_name: "Gopaluni",
  phone: 9441582273,
  email: "gopaluniphai@gmail.com",
  specialization: "Neurology",
};

describe("doctor api endpoint test", () => {
  beforeAll(() => {
    mongoose
      .connect("mongodb://doctors-db:27017/api-test", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("database for doctor api-test connected..."))
      .catch((err) => console.log(err));
  });

  afterEach(async () => {
    await Doctor.deleteMany();
  });

  afterAll(async () => {
    await Doctor.drop();
    mongoose.connection.close();
  });

  it("registers a new doctor and retrieves his information", async (done) => {
    let response = await request.post("/api/doctors").send(doctor);
    let doctorReceived = response.body;
    expect(doctorReceived._id).toBeDefined();
    expect(doctorReceived.first_name).toBe(doctor.first_name);
    expect(doctorReceived.last_name).toBe(doctor.last_name);
    expect(doctorReceived.email).toBe(doctor.email);
    expect(doctorReceived.phone).toBe(doctor.phone);
    expect(doctorReceived.expertise).toBe(doctor.expertise);

    done();
  });

  it("retrieves information of all doctors", async (done) => {
    await request.post("/api/doctors").send(doctor);
    let response = await request.get("/api/doctors");
    let doctors = response.body;
    expect(doctors.length).toBe(1);
    done();
  });
});
