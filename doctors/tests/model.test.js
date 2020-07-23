const mongoose = require("mongoose");
const Doctor = require("../models/Doctor");

describe("Doctor model test", () => {
  beforeAll(() => {
    mongoose
      .connect("mongodb://doctors-db:27017/model-test", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("database for doctor model-test connected..."))
      .catch((err) => console.log(err));
  });

  afterEach(async () => {
    await Doctor.deleteMany();
  });

  afterAll(async () => {
    await Doctor.drop();
    mongoose.connection.close();
  });

  it("inserts a new document", async () => {
    const mockDoctor = {
      first_name: "Phani",
      last_name: "Gopaluni",
      phone: 9441582273,
      email: "gopaluniphai@gmail.com",
      specialization: "Neurology",
    };

    let doctor = new Doctor(mockDoctor);
    let savedDoctor = await doctor.save();

    expect(savedDoctor._id).toBeDefined();
    expect(savedDoctor.first_name).toBe(mockDoctor.first_name);
    expect(savedDoctor.last_name).toBe(mockDoctor.last_name);
    expect(savedDoctor.phone).toBe(mockDoctor.phone);
    expect(savedDoctor.email).toBe(mockDoctor.email);
  });

  it("inserts a document with field not defined in schema", async () => {
    let doctor = new Doctor({
      first_name: "Phani",
      phone: "1234",
      email: "sample@example.com",
      nickname: "phani",
    });
    let savedDoctor = await doctor.save();

    expect(savedDoctor._id).toBeDefined();
    expect(savedDoctor.nickname).toBeUndefined();
  });

  it("inserts an invalid document and expects an error", async () => {
    let doctor = new Doctor({
      first_name: "Phani",
      specialization: "Neurology",
    });
    let err;
    try {
      let savedDoctor = await doctor.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.phone).toBeDefined();
    expect(err.errors.email).toBeDefined();
  });
});
