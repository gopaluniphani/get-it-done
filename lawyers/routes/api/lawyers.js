const express = require("express");

const Lawyer = require("../../models/Lawyer");
const router = express.Router();

/**
 * @route get /api/laywers/
 * @desc list of all the lawyers
 * @access public
 */
router.get("/", async (req, res) => {
  const lawyers = await Lawyer.find();
  res.status(200).json(lawyers);
});

/**
 * @route post /api/lawyers/
 * @desc add a new lawyer to the database
 * @access public
 */
router.post("/", async (req, res) => {
  try {
    let newLawyer = new Lawyer(req.body);
    let savedLawyer = await newLawyer.save();
    res.status(200).json(savedLawyer);
  } catch (e) {
    res.status(400).json({ msg: e.message });
    console.log(e);
  }
});

/**
 * @route get /api/lawyers/:id
 * @desc find a lawyer using id
 * @access public
 */
router.get("/:id", async (req, res) => {
  try {
    let laywer = await Lawyer.findById(req.params.id);
    if (!laywer) {
      throw Error("No lawyer found with given id");
    } else {
      res.status(200).json(lawyer);
    }
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
