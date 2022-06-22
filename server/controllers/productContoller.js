const productService = require("../services/productService");
const validator = require("../utils/validator");

exports.getAllProducts = async (req, res, next) => {
	try {
		const products = await productService.getAllProducts();
		res.status(200).json({
			msg: "Products fetch successfully",
			data: products,
		});
	} catch (error) {
		next(error);
	}
};

exports.getProduct = async (req, res, next) => {
	const { productId } = req.params;

	try {
		if (!productId) {
			throw new Error("Please select a particular product");
		}
		const product = await productService.getProduct(productId);
	} catch (error) {
		next(error);
	}
};

exports.createProduct = async (req, res, next) => {
	const userInput = req.body;

	try {
		const validData = await validator.validateProduct(userInput);
		const product = await productService.createProduct(validData);

		res.status(201).json({
			msg: "Product created successfully",
			data: product,
		});
	} catch (error) {
		next(error);
	}
};

exports.editProduct = async (req, res) => {
	res.send("Edit a partular Product Route");
};

exports.deleteProduct = async (req, res) => {
	res.send("Edit a partular Product Route");
};
