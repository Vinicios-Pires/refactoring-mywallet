import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userRepository from "../repositories/userRepository.js";

async function signUp(name, email, password) {
	if (!name || !email || !password) {
		throw { code: 422 };
	}

	const existingUsers = userRepository.findUserByEmail;
	if (existingUsers.rowCount > 0) {
		throw { code: 409 };
	}

	userRepository.createUser;
}

async function signIn(email, password) {
	if (!email || !password) {
		throw { code: 422 };
	}

	const { rows } = await userRepository.findUserByEmail(email);
	const [user] = rows;
  console.log(user)

	if (!user || !bcrypt.compareSync(password, user.password)) {
		throw { code: 401 };
	}

	const token = jwt.sign(
		{
			id: user.id,
		},
		process.env.JWT_SECRET
	);

	return {
		token,
	};
}

const userService = {
	signUp,
	signIn,
};

export default userService;
