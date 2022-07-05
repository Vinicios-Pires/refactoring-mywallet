import userService from "../services/userService.js";

async function signUp(req, res) {
	const { name, email, password } = req.body;
	await userService.signUp(name, email, password);
	res.sendStatus(201);
}

async function signIn(req, res) {
	const { email, password } = req.body;
	const user = await userService.signIn(email, password);
	res.send(user);
}

const userController = {
	signUp,
	signIn,
};

export default userController;
