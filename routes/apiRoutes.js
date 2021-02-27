const router = require("express").Router()
const { test } = require("../controllers/testController")

//All in testController instead of here
router.get("/test", test);

module.exports = router