const Brand = require("../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbid");



const createBrand = asyncHandler(async (req, res) => {
    try {
        const newBrand = await Brand.create(req.body);
        res.json(newBrand);
    } catch (error) {
        throw new Error(error);
    }
    
});


const updateBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updatedBrand = await Brand.findByIdAndUpdate(
            id, req.body,
            { new: true },
        );
        res.json(updatedBrand);
    } catch (error) {
        throw new Error(error);
    }
});






module.exports = { createBrand , updateBrand};