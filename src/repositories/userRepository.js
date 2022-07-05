import connection from "../database.js";

async function findUserByEmail(email) {
	const result = await connection.query(
		`SELECT * FROM "users" WHERE "email"=$1`,
		[email]
	);

	return result.rows[0];
}

async function createUser(name, email) {
	const hashedPassword = bcrypt.hashSync(password, 12);

	await connection.query(
		`INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
		[name, email, hashedPassword]
	);
}

const userRepository = {
	findUserByEmail,
	createUser,
};

export default userRepository;
