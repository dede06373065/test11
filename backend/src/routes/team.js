const express = require("express");
const { getAllStaff } = require("../controllers/team");

const router = express.Router();
router.get("/api/staff", getAllStaff);

module.exports = router;
