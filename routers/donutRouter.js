const { getDonuts, postDonut, deleteDonut, updateDonut, getDonutById } = require("../controllers/donutController");

const router = require("express").Router();

router.get("/getdonuts", getDonuts);
router.get("/getdonutbyid/:id", getDonutById);
router.post("/postdonut", postDonut);
router.delete("/deletedonut/:id", deleteDonut);
router.patch("/updatedonut/:id", updateDonut);

module.exports = router