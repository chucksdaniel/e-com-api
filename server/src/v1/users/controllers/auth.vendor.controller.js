const userHelper = require("../../utils/user.helper");
const validator = require("../../utils/validator");

const createError = require("../../utils/errors");

exports.registerVendor = async (req, res, next) => {
	const body = req.body;

	console.log(body);
	try {
		const userData = await validator.validateSignup(body);

		const usernameExit = await userHelper.findByUsername(
			userData.username.toLowerCase()
		);

		if (usernameExit) {
			next(createError(400, "A user with this username already exists"));
			return;
		}
		const emailExist = await userHelper.findByEmail(
			userData.email.toLowerCase()
		);
		if (emailExist) {
			next(createError(400, "A user with this eamil already exists"));
			return;
		}

		userData.password = await userHelper.hashPassword(userData.password);
		const newUser = await userHelper.createVendor(userData);

		return res.status(201).json({
			msg: "User registered successfully",
			user: newUser,
		});
	} catch (error) {
		next(error);
	}
};

exports.login = async (req, res, next) => {
	res.send("Vendors login endpoint");
};

exports.getVendorUser = async (req, res, next) => {
	res.send("Vendors logged in endpoint");
};
