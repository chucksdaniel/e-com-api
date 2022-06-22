const productHelper = require("../utils/productHelper");

exports.getAllProducts = async () => {
	const products = await productHelper.getAllProducts();
	return products;
};

exports.getProduct = async (productId) => {
	try {
		const product = await productHelper.getProduct(productId);

		if (!product) {
			throw new Error("Product not found");
		}
		return product;
	} catch (error) {
		throw error;
	}
};

exports.updateProduct = async (productId) => {
	try {
		const product = await productHelper.updateProduct(productId);

		if (!product) {
			throw new Error("Product not found");
		}
	} catch (error) {
		throw error;
	}
};
