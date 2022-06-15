const express = require("express");
const router = express.Router();

/**
 *  @route      GET api/v1/users/login
 *  @desc       Get logged in user
 *  @access     Private
 */
router.get("/", (req, res) => {
	res.send("Welcome to Product Route");
});
/**
 *  @route      POST api/v1/products/
 *  @desc       Create a new product
 *  @access     Public
 */
router.get("/:productId", (req, res) => {
	res.send("Get a particular Product");
});

/**
 *  @route      POST api/v1/products/
 *  @desc       Create a new product
 *  @access     Private
 */
router.post("/", (req, res) => {
	res.send("Create a new Product Route");
});
/**
 *  @route      PUT api/v1/products/:productId
 *  @desc       Edit a particular product by product owner
 *  @access     Private
 */
router.put("/:productId", (req, res) => {
	res.send("Edit a partular Product Route");
});
/**
 *  @route      DELETE api/v1/products/:productId
 *  @desc       Delete a particular product by product owner
 *  @access     Private
 */
router.delete("/:productId", (req, res) => {
	res.send("Edit a partular Product Route");
});

module.exports = router;
