const mongoose = require("mongoose");

const Lawyer = require("../models/Lawyer");

describe("Lawyer model test", () => {
  beforeAll(() => {
    mongoose
      .connect("mongodb://lawyers-db:27017/model-test", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("database for lawyer model-test connected..."))
      .catch((err) => console.log(err));
  });

  afterEach(async () => {
    await Lawyer.deleteMany();
  });

  afterAll(async () => {
    await Lawyer.drop();
    await mongoose.connection.close();
  });

  it("inserts a new document", async () => {
    const mockLawyer = {
      first_name: "Phani",
      last_name: "Gopaluni",
      phone: 9441582273,
      email: "gopaluniphai@gmail.com",
      expertise: "Corporate Law",
    };

    let lawyer = new Lawyer(mockLawyer);
    let savedLawyer = await lawyer.save();

    expect(savedLawyer._id).toBeDefined();
    expect(savedLawyer.first_name).toBe(mockLawyer.first_name);
    expect(savedLawyer.last_name).toBe(mockLawyer.last_name);
    expect(savedLawyer.phone).toBe(mockLawyer.phone);
    expect(savedLawyer.email).toBe(mockLawyer.email);
    expect(savedLawyer.expertise).toBe(mockLawyer.expertise);
  });

  it("inserts a document with field not defined in schema", async () => {
    let lawyer = new Lawyer({
      first_name: "Phani",
      phone: "1234",
      email: "sample@example.com",
      nickname: "phani",
    });
    let savedLawyer = await lawyer.save();

    expect(savedLawyer._id).toBeDefined();
    expect(savedLawyer.nickname).toBeUndefined();
  });

  it("inserts an invalid document and expects an error", async () => {
    let lawyer = new Lawyer({
      first_name: "Phani",
      expertise: "Pro Bono",
    });
    let err;
    try {
      let savedLawyer = await lawyer.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.phone).toBeDefined();
    expect(err.errors.email).toBeDefined();
  });
});
