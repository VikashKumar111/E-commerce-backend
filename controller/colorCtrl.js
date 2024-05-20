// ("")

const Color = require("../models/colorModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbid");

const createColor = asyncHandler(async (req, res) => {
  try {
    const newColor = await Color.create(req.body);
    res.json(newColor);
  } catch (error) {
    throw new Error(error);
  }
});


const updateColor = asyncHandler(async (req, res) => {
    try {
        
    } catch (error) {
        throw new Error(error);
    }
})
module.exports = { createColor };
