const validator = require("../../utils/validator");
const userHelper = require("../../utils/helper");

const createError = require("../../utils/errors");
// const { use } = require("../routes/auth.route");

exports.getAllUser = (req, res, next) => {
	res.send("Get all users endpoint");
};

exports.registerUser = (req, res, next) => {
	res.send("Admin register user endpoint");
};

exports.updateUser = (req, res, next) => {
	res.send("Update users' endpoint");
};

exports.deleteUser = (req, res, next) => {
	res.send("Delete users' endpoint");
};
