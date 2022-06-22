const ProductModel = require("../models/Product");

exports.create = async ({ name, description, category, price }) => {
	const newProduct = new ProductModel({
		name,
		category,
		category,
		price,
		quantity,
		brand,
	});
	const product = await newProduct.save();

	return product;
};

exports.getAllProducts = async () => {
	const products = await ProductModel.find();

	return products;
};

exports.getProduct = async (productId) => {
	const product = await ProductModel.findById(productId);
	return product;
};
