const helper = require("../utils/helper");
const createError = require("../utils/errors");

/**
 *  Get a token from the headers
 *  Decode the token and return the user data
 */

const getToken = (req) => {
	const authToken = req.headers.authorization;
	if (!authToken) {
		// throw new Error("No Token, authorization denied!");
		throw createError(401, "No Token, authorization denied!");
	}
	const token = authToken.split(" ")[1];
	return token;
};

const auth = (req, res, next) => {
	// const token = helper.getToken(req);
	const token = getToken(req);
	try {
		const decoded = helper.validateToken(token);
		req.user = decoded.user;
		next();
	} catch (error) {
		res.status(401).json({ msg: "Token is not valid" });
	}
};

const isAuthorized = (req, res, next) => {
	auth(req, res, () => {
		if (req.user.id === req.params.id) {
			next();
		} else {
			res.status(403).json({
				msg: "You are not authorized to perform this action",
			});
		}
	});
};

const isSeller = (req, res, next) => {
	auth(req, res, () => {
		if (req.user.id === req.params.id && req.user.role === "seller") {
			next();
		} else {
			res.status(403).json({
				msg: "You are not allow to perform this action",
			});
		}
	});
};

const isAdmin = (req, res, next) => {
	auth(req, res, () => {
		if (req.user.role === "admin") {
			next();
		} else {
			res.status(403).json({
				msg: "Authorization denied!, contact the admin",
			});
		}
	});
};

module.exports = {
	auth,
	isAuthorized,
	isSeller,
	isAdmin,
};
