const express = require('express');
const { createBrand } = require('../controller/brandCtrl');
const router = express.Router();




router.post("/", createBrand);


module.exports = router;