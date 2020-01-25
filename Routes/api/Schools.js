const express = require("express");
const router = express.Router();
const { School } = require("../../Models/School");

//registering a school
router.post("/register", async (req, res) => {
  const { name, province, district } = req.body;
  try {
    const newSchool = new School({
      name,
      province,
      district
    });

    const result = await newSchool.save();
    res.send(result);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;