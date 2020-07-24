const express = require("express");

const Doctor = require("../../models/Doctor");
const router = express.Router();

/**
 * @route post /api/doctors
 * @desc register a new doctor
 * @access public
 */
router.post("/", async (req, res) => {
  try {
    let newDoctor = new Doctor(req.body);
    let savedDoctor = await newDoctor.save();
    res.status(200).json(savedDoctor);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
});

/**
 * @route get /api/doctors
 * @desc get all the doctors
 * @access public
 */
router.get("/", async (req, res) => {
  try {
    let doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
});

/**
 * @route get /api/doctors/:id
 * @desc get doctor with give id
 * @access public
 */
router.get("/:id", async (req, res) => {
  try {
    let doctor = await Doctor.findById(req.params.id);
    if (!doctor) throw Error("No doctor with give id");
    res.status(200).json(doctor);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
});

module.exports = router;
