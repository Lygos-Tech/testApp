const express = require("express");
const router = express.Router();
const cors = require("cors")
const {test, loginUser} = require("../controllers/authController")


//middleware
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.post('/login', loginUser)

module.exports = router